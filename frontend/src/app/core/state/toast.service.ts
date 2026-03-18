import { Injectable, signal } from '@angular/core';

export interface AppToast {
  id: number;
  level: 'success' | 'error' | 'info';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private nextId = 1;

  readonly toasts = signal<AppToast[]>([]);

  success(message: string, durationMs = 4_000) {
    this.push('success', message, durationMs);
  }

  error(message: string, durationMs = 4_000) {
    this.push('error', message, durationMs);
  }

  info(message: string, durationMs = 4_000) {
    this.push('info', message, durationMs);
  }

  dismiss(id: number) {
    this.toasts.update((toasts) => toasts.filter((toast) => toast.id !== id));
  }

  private push(level: AppToast['level'], message: string, durationMs: number) {
    const id = this.nextId++;
    this.toasts.update((toasts) => [...toasts, { id, level, message }]);

    globalThis.setTimeout(() => {
      this.dismiss(id);
    }, durationMs);
  }
}
