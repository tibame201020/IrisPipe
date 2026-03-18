import { defineConfig, devices } from '@playwright/test';

const frontendPort = process.env.PLAYWRIGHT_FRONTEND_PORT ?? '4205';
const backendPort = process.env.PLAYWRIGHT_BACKEND_PORT ?? '8080';
const backendDatasourceUrl =
  process.env.PLAYWRIGHT_BACKEND_DATASOURCE_URL
  ?? `jdbc:h2:./h2data/playwright-${backendPort}-${Date.now()};AUTO_SERVER=true;DB_CLOSE_DELAY=-1`;

process.env.PLAYWRIGHT_RUNTIME_JDBC_URL ??= backendDatasourceUrl;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: `http://localhost:${frontendPort}`,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: [
    {
      command: 'mvn -q -DskipTests spring-boot:run',
      cwd: '../backend',
      url: `http://localhost:${backendPort}/actuator/health`,
      timeout: 180_000,
      reuseExistingServer: !process.env.CI,
      env: {
        ...process.env,
        SPRING_DATASOURCE_URL: backendDatasourceUrl,
        SERVER_PORT: backendPort,
      },
    },
    {
      command: 'npm start',
      cwd: '.',
      url: `http://localhost:${frontendPort}`,
      timeout: 120_000,
      reuseExistingServer: !process.env.CI,
      env: {
        ...process.env,
        IRISPIPE_PROXY_TARGET: `http://127.0.0.1:${backendPort}`,
      },
    },
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
