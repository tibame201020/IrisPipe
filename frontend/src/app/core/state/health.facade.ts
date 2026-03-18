import { Injectable, inject, signal } from '@angular/core';
import { appEnvironment } from '../config/app-environment';
import { HealthApiService } from '../api/health-api.service';

@Injectable({
  providedIn: 'root',
})
export class HealthFacade {
  private readonly healthApi = inject(HealthApiService);
  private pollHandle: ReturnType<typeof setInterval> | null = null;

  readonly backendStatus = signal<'UP' | 'DOWN' | 'CHECKING'>('CHECKING');
  readonly lastCheckedAt = signal<Date | null>(null);

  refreshHealth() {
    this.healthApi.getHealth().subscribe({
      next: (health) => {
        this.backendStatus.set(health.status === 'UP' ? 'UP' : 'DOWN');
        this.lastCheckedAt.set(new Date());
      },
      error: () => {
        this.backendStatus.set('DOWN');
        this.lastCheckedAt.set(new Date());
      }
    });
  }

  startPolling(intervalMs = appEnvironment.polling.healthMs) {
    if (this.pollHandle !== null) {
      return;
    }

    this.refreshHealth();
    this.pollHandle = globalThis.setInterval(() => this.refreshHealth(), intervalMs);
  }

  stopPolling() {
    if (this.pollHandle === null) {
      return;
    }

    globalThis.clearInterval(this.pollHandle);
    this.pollHandle = null;
  }
}
