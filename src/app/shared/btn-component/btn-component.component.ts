import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router para navegação

@Component({
  selector: 'app-btn-component',
  standalone: true,
  imports: [],
  templateUrl: './btn-component.component.html',
  styleUrls: ['./btn-component.component.scss']
})
export class BtnComponentComponent {
  @Input() buttonType: string = 'adoteAgora';

  constructor(private router: Router) {} 

  handleClick() {
    if (this.buttonType === 'nossasRegras') {
      this.navigateToRegras();
    } else {
      this.navigateToAdote();
    }
  }

  navigateToRegras() {
    this.router.navigate(['/regras']);
  }

  navigateToAdote() {
    this.router.navigate(['/adote']);
  }
}
