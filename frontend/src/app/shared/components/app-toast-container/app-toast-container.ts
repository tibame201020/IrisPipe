import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from '../../../core/state/toast.service';

@Component({
  selector: 'app-app-toast-container',
  imports: [],
  templateUrl: './app-toast-container.html',
  styleUrl: './app-toast-container.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppToastContainer {
  protected readonly toastService = inject(ToastService);
}
