export const appEnvironment = {
  appName: 'IrisPipe',
  apiBaseUrl: '',
  defaultWorkspaceKey: 'default',
  polling: {
    recentMs: 5000,
    recentBackgroundMs: 20000,
    healthMs: 30000,
    activeRunMs: 1000
  }
} as const;
