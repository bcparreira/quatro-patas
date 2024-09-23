import { Component } from '@angular/core';
import { BtnComponentComponent } from '../../shared/btn-component/btn-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
