import { NgModule } from '@angular/core'; // no ./
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ngModel

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
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component'; //  ./ for src//  ./ for src

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
  ], // all compo which controls by Module
  imports: [BrowserModule, FormsModule, ReactiveFormsModule], // all common module (logics) to run components
  bootstrap: [AppComponent, ReactiveFormComponent], // start root compo
})
export class AppModule {}
