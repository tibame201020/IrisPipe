import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShellLayoutFacade {
  private static readonly COMPACT_BREAKPOINT = 1240;

  readonly isCompact = signal(false);
  readonly sidebarOpen = signal(true);
  readonly inspectorOpen = signal(true);

  syncViewport(width: number) {
    const nextCompact = width <= ShellLayoutFacade.COMPACT_BREAKPOINT;
    const wasCompact = this.isCompact();

    this.isCompact.set(nextCompact);

    if (!nextCompact) {
      this.sidebarOpen.set(true);
      this.inspectorOpen.set(true);
      return;
    }

    if (!wasCompact && nextCompact) {
      this.sidebarOpen.set(false);
      this.inspectorOpen.set(false);
    }
  }

  toggleSidebar() {
    if (!this.isCompact()) {
      return;
    }

    this.sidebarOpen.update((value) => !value);
    if (this.sidebarOpen()) {
      this.inspectorOpen.set(false);
    }
  }

  toggleInspector() {
    if (!this.isCompact()) {
      return;
    }

    this.inspectorOpen.update((value) => !value);
    if (this.inspectorOpen()) {
      this.sidebarOpen.set(false);
    }
  }

  closeTransientPanels() {
    if (!this.isCompact()) {
      return;
    }

    this.sidebarOpen.set(false);
    this.inspectorOpen.set(false);
  }
}
