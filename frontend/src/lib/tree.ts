import type { ConfigPipelineSummary, FolderTreeNodeInfo, PipelineTreeInfo } from '../types/irispipe'

export interface TreeStats {
  folderCount: number
  pipelineCount: number
}

export function countTreeStats(tree: PipelineTreeInfo): TreeStats {
  const folderCount = tree.folders.reduce((total, folder) => total + countFolders(folder), 0)
  const pipelineCount =
    tree.pipelines.length + tree.folders.reduce((total, folder) => total + countPipelines(folder), 0)

  return {
    folderCount,
    pipelineCount,
  }
}

function countFolders(folder: FolderTreeNodeInfo): number {
  return 1 + folder.folders.reduce((total, child) => total + countFolders(child), 0)
}

function countPipelines(folder: FolderTreeNodeInfo): number {
  return (
    folder.pipelines.length + folder.folders.reduce((total, child) => total + countPipelines(child), 0)
  )
}

export function findFolderPath(tree: PipelineTreeInfo, folderId: number): FolderTreeNodeInfo[] {
  for (const folder of tree.folders) {
    const path = findFolderPathRecursive(folder, folderId)
    if (path.length > 0) {
      return path
    }
  }

  return []
}

function findFolderPathRecursive(folder: FolderTreeNodeInfo, folderId: number): FolderTreeNodeInfo[] {
  if (folder.id === folderId) {
    return [folder]
  }

  for (const child of folder.folders) {
    const path = findFolderPathRecursive(child, folderId)
    if (path.length > 0) {
      return [folder, ...path]
    }
  }

  return []
}

export function getFolderChildren(tree: PipelineTreeInfo, folderId?: number | null) {
  if (!folderId) {
    return {
      folderPath: '/',
      folderName: 'Root',
      folders: tree.folders,
      pipelines: tree.pipelines,
    }
  }

  const path = findFolderPath(tree, folderId)
  const current = path[path.length - 1]
  if (!current) {
    return {
      folderPath: '/',
      folderName: 'Root',
      folders: [],
      pipelines: [],
    }
  }

  return {
    folderPath: current.folderPath,
    folderName: current.folderName,
    folders: current.folders,
    pipelines: current.pipelines,
  }
}

export function buildExplorerLocation(folderId: number | null | undefined) {
  if (!folderId) {
    return '/pipeline'
  }

  return `/pipeline/folders/${folderId}`
}

export function sortExplorerItems<T extends FolderTreeNodeInfo | ConfigPipelineSummary>(items: T[], key: keyof T) {
  return [...items].sort((left, right) => String(left[key]).localeCompare(String(right[key])))
}
