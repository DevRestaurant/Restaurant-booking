"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var flash_messages_angular_1 = require("flash-messages-angular");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var about_component_1 = require("./components/about/about.component");
var menu_component_1 = require("./components/menu/menu.component");
var specials_component_1 = require("./components/specials/specials.component");
var chefs_component_1 = require("./components/chefs/chefs.component");
var gallery_component_1 = require("./components/gallery/gallery.component");
var contact_component_1 = require("./components/contact/contact.component");
var footer_component_1 = require("./components/footer/footer.component");
var not_found_component_1 = require("./components/not-found/not-found.component");
var homepage_component_1 = require("./components/homepage/homepage.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var review_component_1 = require("./components/review/review.component");
var hero_component_1 = require("./components/hero/hero.component");
var booking_component_1 = require("./components/booking/booking.component");
var testimonial_component_1 = require("./components/testimonial/testimonial.component");
var welcome_component_1 = require("./components/welcome/welcome.component");
var menu_service_service_1 = require("./services/menu-service.service");
var auth_service_1 = require("./services/auth.service");
var angularx_social_login_1 = require("angularx-social-login");
var auth_reducers_1 = require("./Reducers/auth.reducers");
var auth_effects_1 = require("./Effects/auth.effects");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                about_component_1.AboutComponent,
                menu_component_1.MenuComponent,
                specials_component_1.SpecialsComponent,
                chefs_component_1.ChefsComponent,
                gallery_component_1.GalleryComponent,
                contact_component_1.ContactComponent,
                footer_component_1.FooterComponent,
                not_found_component_1.NotFoundComponent,
                homepage_component_1.HomepageComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                review_component_1.ReviewComponent,
                hero_component_1.HeroComponent,
                booking_component_1.BookingComponent,
                testimonial_component_1.TestimonialComponent,
                welcome_component_1.WelcomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angularx_social_login_1.SocialLoginModule,
                flash_messages_angular_1.FlashMessagesModule.forRoot(),
                store_1.StoreModule.forRoot({ auth: auth_reducers_1.AuthReducer }),
                effects_1.EffectsModule.forRoot([auth_effects_1.AuthEffects])
            ],
            providers: [
                {
                    provide: 'SocialAuthServiceConfig',
                    useValue: {
                        autoLogin: true,
                        providers: [
                            {
                                id: angularx_social_login_1.GoogleLoginProvider.PROVIDER_ID,
                                provider: new angularx_social_login_1.GoogleLoginProvider('783324307828-ii3gbrgd2b5ok7ht0pndp64d4972j0eg.apps.googleusercontent.com') // your client id
                            }
                        ]
                    }
                },
                menu_service_service_1.MenuServiceService,
                auth_service_1.AuthService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
