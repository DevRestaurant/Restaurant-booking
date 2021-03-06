import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'flash-messages-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

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
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { EntityCollectionReducerMethodsFactory, EntityDataModule, EntityDefinitionService, HttpUrlGenerator, PersistenceResultHandler } from '@ngrx/data';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userEntityMetaData } from './MetaData/entity-metadata';
import { EntityStoreModule } from './entity-store/entity-store.module';
import { AdditionalPersistenceResultHandler } from './additional-persistence-result-handler';
import { AdditionalEntityCollectionReducerMethodsFactory } from './services/factory-reducer.service';

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
    EntityStoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({
      entityMetadata: userEntityMetaData,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [
    { provide: PersistenceResultHandler,
      useClass: AdditionalPersistenceResultHandler
    },
    {
      provide: EntityCollectionReducerMethodsFactory,
      useClass: AdditionalEntityCollectionReducerMethodsFactory
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('783324307828-ii3gbrgd2b5ok7ht0pndp64d4972j0eg.apps.googleusercontent.com') // your client id
          }
        ]
      } as SocialAuthServiceConfig
    },
    {
      provide: HttpUrlGenerator,
      useClass: MenuServiceService,
    },
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
