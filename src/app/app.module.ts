import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'flash-messages-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReviewComponent } from './components/review/review.component';
import { HeroComponent } from './components/hero/hero.component';
import { BookingComponent } from './components/booking/booking.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuServiceService } from './services/menu-service.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    MenuComponent,
    SpecialsComponent,
    ChefsComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ReviewComponent,
    HeroComponent,
    BookingComponent,
    TestimonialComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [MenuServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
