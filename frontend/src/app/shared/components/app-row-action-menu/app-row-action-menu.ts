import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

export interface AppRowActionMenuItem {
  label: string;
  onSelect: () => void;
  testId?: string;
}

@Component({
  selector: 'app-row-action-menu',
  imports: [],
  templateUrl: './app-row-action-menu.html',
  styleUrl: './app-row-action-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRowActionMenu {
  @Input({ required: true }) items: AppRowActionMenuItem[] = [];
  @Input() triggerLabel = 'More';
  @Input() triggerTestId: string | null = null;
  @Input() menuTestId: string | null = null;

  protected readonly isOpen = signal(false);

  protected toggle() {
    this.isOpen.update((value) => !value);
  }

  protected select(item: AppRowActionMenuItem) {
    item.onSelect();
    this.isOpen.set(false);
  }
}
