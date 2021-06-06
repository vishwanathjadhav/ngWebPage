import { NgModule } from '@angular/core'; // no ./
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfferPipe } from './pipes/offer.pipe';
import { TextcolorDirective } from './directives/textcolor.directive';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FooterComponent } from './layouts/footer/footer.component'; //  ./ for src

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
  ], // all compo which controls by Module
  imports: [BrowserModule], // all common module (logics) to run components
  bootstrap: [AppComponent], // start root compo
})
export class AppModule {}