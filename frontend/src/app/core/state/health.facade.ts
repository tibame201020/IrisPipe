import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HealthFacade {
  readonly backendStatus = signal<'UP' | 'DOWN'>('UP');
}
