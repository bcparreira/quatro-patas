import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-regras',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './regras.component.html',
  styleUrls: ['./regras.component.scss']
})
export class RegrasComponent {
  regras: string[] = [
    'Carinho e atenção não pode faltar;',
    'Cuide de pulgas, carrapatos, entre outros parasitas;',
    'Leve ao veterinário regularmente;',
    'Mantenha as vacinas em dia, é importante para ele(a) e para você.',
    'A castração é importante para prevenir doenças e a procriação.'
  ];
}
