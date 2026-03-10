# Feature 05: Secrets Management & Security
# 憑證管理與平台資安

## 1. 痛點與現狀分析
在早期的 JSON/YAML 設定檔中，或是轉型到關係型資料庫 (`Connection_Info` 表) 後，使用者的來源與目的端資料庫連線密碼 (`password`) 極可能會以 **明碼 (Plain Text)** 落地儲存。
這在企業級架構是零容忍的風險：任何能接觸到 K8s 節點、VM 或設定檔目錄、甚至是平台後台資料庫的開發人員，都能竊取全公司的資料庫特權帳號。

## 2. 目標與願景
根絕所有靜態憑證外洩的可能性，達成 **「無憑證可見化 (Zero Trust Secrets)」** 架構。所有敏感金鑰必須加密儲存，或是在記憶體取出時才即時從受信任的第三方憑證中心調用。

## 3. 架構設計與實作規劃

### 3.1 方案 A：對稱式加密與 KMS (無外部依賴方案)
如果不想架設額外的系統組件，可使用 Spring Security Crypto 模組搭配雲端金鑰管理。
1. **環境變數注入 Master Key**：平台啟動時，要求自環境變數傳入一把強度的 `ENCRYPTION_MASTER_KEY` (或透過 AWS KMS/Azure Key Vault 動態注入這把 Master Key 保證安全)。
2. **Converter 攔截器**：在 JPA 實體 `Connection_Info` 的密碼欄位加上 `@Convert(converter = AttributeEncryptor.class)`。
   * **寫入 DB 時**：呼叫 AES-256 (GCM mode) 對密碼加密。
   * **讀取 DB 時**：自動解密。
   * 若是原先的實體檔案模式，則修改 `JobConfigService` 在反序列化時經過同樣的解密引擎。

### 3.2 方案 B：動態密碼保險箱 (HashiCorp Vault 整合)
最符合雲原生架構，將密碼管理權限從開發與維運人員手中完全收回。
1. **Spring Cloud Vault**：引入 Spring-cloud-starter-vault-config 套件。
2. **改變設定定義**：使用者的 JSON 檔或 DB 內不再存放 `"password": "my_sql_pass"}`。而是改存放對應的 Vault 路徑，例如 `"password": "vault://database/creds/core-db-role"`。
3. **動態提取與租期 (Dynamic Secrets & Leasing)**：
   * 當 `SyncJobContextFactory` 準備初始化 HikariCP 連線池時，攔截器會辨識 `vault://` 協定，打 API 去 HashiCorp Vault 申請一組 **短暫且只能在該 Job 期間使用的動態資料庫帳號密碼**。
   * 當 Job 結束 (`CustomJobListener` 攔截完成)，Vault 也會同時將該帳號回收或註銷。

### 3.3 隔離網路邊界與 TLS 加密 (Data In Transit)
* **JDBC TLS 強制執行**：強制要求所有 DataSource 在建立連線時附帶 `ssl=true` 或 `sslMode=VERIFY_IDENTITY`，以防止封包在節點之間傳輸時遭到嗅探 (Packet Sniffing)。
* **內部 API 驗證**：若平台拆分為 Manager 與 Worker (Feature 03)，互相之間的溝通必須採用 mTLS (Mutual TLS) 或由內部憑證中心核發 JWT token 進行驗證。

## 4. 預期效益
* **通過嚴格資安審核 (Compliance)**：能完美通過 ISO-27001 或是 PCI-DSS 等安全合規要求，消除明文密碼落地的阻礙。
* **降低內部威脅風險 (Insider Threats)**：開發者將只能看到 Vault 的映射路徑，完全不知道真實資料庫密碼，徹底保護企業敏感資料的最後一哩路。
