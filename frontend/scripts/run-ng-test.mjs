import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';

const isWindows = process.platform === 'win32';
const command = isWindows ? 'cmd.exe' : 'npx';
const args = isWindows
  ? ['/d', '/s', '/c', 'npx ng test --watch=false --browsers=ChromeHeadless']
  : ['ng', 'test', '--watch=false', '--browsers=ChromeHeadless'];

const child = spawn(command, args, {
  stdio: 'inherit',
  env: {
    ...process.env,
    CHROME_BIN: chromium.executablePath(),
  },
});

child.on('exit', (code) => {
  process.exit(code ?? 1);
});
