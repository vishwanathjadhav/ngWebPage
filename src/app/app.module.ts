import { NgModule } from '@angular/core'; // no ./
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ngModel
import { AuthService } from './services/auth.service';

// Step 5: import : import { RouterModule, Routes } from '@angular/router';
// Step 6: imports[ RouterModule.forRoot(appRoutes) ]

import { AppComponent } from './app.component';
import { OfferPipe } from './pipes/offer.pipe';
import { TextcolorDirective } from './directives/textcolor.directive';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { PlantsComponent } from './products/plants/plants.component';
import { BooksComponent } from './products/books/books.component';
import { TempFormComponent } from './forms/temp-form/temp-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { HomeComponent } from './layouts/home/home.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './guard/auth.guard'; //  ./ for src//  ./ for src
import { HttpClientModule } from '@angular/common/http';
import { MotorolaComponent } from './products/mobile/motorola/motorola.component';
import { SamsungComponent } from './products/mobile/samsung/samsung.component';
import { MobileMenuComponent } from './products/mobile/mobile-menu/mobile-menu.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

// var name:string ="Alex"
// name=10

// Step 7: appRoutes

@NgModule({
  // module decorator
  declarations: [
    AppComponent,
    OfferPipe,
    TextcolorDirective,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    ContactUsComponent,
    BannerThreeComponent,
    FooterComponent,
    MobileComponent,
    LaptopComponent,
    PlantsComponent,
    BooksComponent,
    TempFormComponent,
    ReactiveFormComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    LoginComponent,
    MotorolaComponent,
    SamsungComponent,
    MobileMenuComponent,
    ProductDetailsComponent,
  ], // all compo which controls by Module
  providers: [AuthService],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ], // all common module (logics) to run components
  //bootstrap: [ReactiveFormComponent], // To start app-reactive-form
  bootstrap: [AppComponent], // To start app-start
  //bootstrap: [TempFormComponent], // To start app-start
})
export class AppModule {}
