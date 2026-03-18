import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TreeFacade {
  readonly selectedFolderId = signal<string | null>('1');
  readonly selectedPipelineId = signal<string | null>(null);
}
