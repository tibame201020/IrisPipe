export interface WorkspaceInfo {
  id: number;
  workspaceKey: string;
  workspaceName: string;
  systemDefault: boolean;
}

export interface WorkspaceUpsertRequest {
  workspaceKey: string;
  workspaceName: string;
}
