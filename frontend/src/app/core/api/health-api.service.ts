import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { appEnvironment } from '../config/app-environment';
import { HealthInfo } from '../../shared/models/health.model';
import { mapHealthInfo } from '../../shared/mappers/health.mapper';

@Injectable({
  providedIn: 'root',
})
export class HealthApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  getHealth() {
    return this.http.get<unknown>(`${this.baseUrl}/actuator/health`).pipe(map(mapHealthInfo));
  }
}
