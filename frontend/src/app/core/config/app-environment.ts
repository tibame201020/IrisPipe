export const appEnvironment = {
  appName: 'IrisPipe',
  apiBaseUrl: 'http://localhost:8080',
  defaultWorkspaceKey: 'default',
  polling: {
    recentMs: 5000,
    recentBackgroundMs: 20000,
    healthMs: 30000,
    activeRunMs: 1000
  }
} as const;
