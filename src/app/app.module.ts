import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  
import { HomeComponent } from './pages/home/home.component'; 
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BtnComponentComponent } from './shared/btn-component/btn-component.component';
import { CardComponent } from './shared/card/card.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BtnComponentComponent,
    CardComponent,
    ModalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class AppModule { }
