import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellHeader } from '../shell-header/shell-header';
import { ShellSidebar } from '../shell-sidebar/shell-sidebar';
import { RunInspector } from '../run-inspector/run-inspector';
import { ShellStatusBar } from '../shell-status-bar/shell-status-bar';

@Component({
  selector: 'app-app-shell',
  imports: [RouterOutlet, ShellHeader, ShellSidebar, RunInspector, ShellStatusBar],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShell {}
