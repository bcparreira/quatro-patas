import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  
  @Input() modalTitle: string = '';
  @Input() modalMessage: string = '';
  @Input() modalImage: string = '';
  @Input() backgroundColor: string = '';

  closeModal() {
    this.close.emit();
  }
}
