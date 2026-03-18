import { WorkspaceInfo } from '../models/workspace.model';
import { asBoolean, asNumber, asRecord, asString } from './normalize';

export function mapWorkspaceInfo(value: unknown): WorkspaceInfo {
  const source = asRecord(value);

  return {
    id: asNumber(source['id']),
    workspaceKey: asString(source['workspaceKey'], 'default'),
    workspaceName: asString(source['workspaceName'], 'Default Workspace'),
    systemDefault: asBoolean(source['systemDefault']),
  };
}
