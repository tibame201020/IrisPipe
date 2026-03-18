import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appEnvironment } from '../config/app-environment';
import { HealthInfo } from '../../shared/models/health.model';

@Injectable({
  providedIn: 'root',
})
export class HealthApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  getHealth() {
    return this.http.get<HealthInfo>(`${this.baseUrl}/actuator/health`);
  }
}
