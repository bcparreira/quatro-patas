import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-adote',
  templateUrl: './adote.component.html',
  styleUrls: ['./adote.component.scss'],
  standalone: true,
  imports: [CardComponent, CommonModule]
})
export class AdoteComponent {
  pets = [
    {
      name: 'Luigy Gonzales',
      description: 'Buldogue, macho',
      img: '../../../assets/images/content/LuigyGonzales2x.png'
    },
    {
      name: 'Shakira Lopez',
      description: 'Amarelo, fêmea',
      img: '../../../assets/images/content/ShakiraLopez2x.png'
    },
    {
      name: 'Nico Di Angelo',
      description: 'Frajola, macho',
      img: '../../../assets/images/content/NicoDiAngelo2x.png'
    },
    {
      name: 'Bartolomeu II',
      description: 'Vira-lata, macho',
      img: '../../../assets/images/content/BartolomeuII2x.png'
    },
    {
      name: 'Marieta Soares',
      description: 'Golden, fêmea',
      img: '../../../assets/images/content/MarietaSoares2x.png'
    },
    {
      name: 'Pity Caramelo',
      description: 'Vira-lata, fêmea',
      img: '../../../assets/images/content/PityCaramelo2x.png'
    },
    {
      name: 'Perseu Baptist',
      description: 'Rajado, macho',
      img: '../../../assets/images/content/PerseuBaptist2x.png'
    },
    {
      name: 'Theodora Blanc',
      description: 'Albino, fêmea',
      img: '../../../assets/images/content/TheodoraBlanc2x.png'
    },
    {
      name: 'Rosinha Mali',
      description: 'Escaminha, fêmea',
      img: '../../../assets/images/content/RosinhaMali2x.png'
    },
  ];
}
