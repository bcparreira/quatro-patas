import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [ModalComponent, CommonModule, MatIconModule]
})
export class CardComponent {
  @Input() pet!: { name: string; description: string; img: string };
  showModal = false;

  modalTitle: string = '';
  modalMessage: string = '';
  modalImage: string = '';
  backgroundColor: string = '';
  isFavorited = false;

  openAdoteModal() {
    this.modalTitle = 'VOCÊ GANHOU UM NOVO AMIGUINHO!';
    this.modalMessage = 'Obrigado por sua adoção, ficamos felizes por você e por ele!';
    this.modalImage = '../../../assets/images/illustration/AdoptModalDog2x.png';
    this.backgroundColor = '#91d88b';
    this.showModal = true;
  }

  openFavoritarModal() {
    if (this.isFavorited) {
      this.isFavorited = !this.isFavorited;
    } else {
      this.modalTitle = 'FAVORITADO COM AMOR!!';
      this.modalMessage = 'Obrigado por seu interesse em nossos amigos! Esperamos ansiosos pela sua adoção!';
      this.modalImage = '../../assets/images/illustration/FavModalDog2x.png';
      this.backgroundColor = '#D88BB9';
      this.showModal = true;
      this.isFavorited = !this.isFavorited;
    }
  }
}
