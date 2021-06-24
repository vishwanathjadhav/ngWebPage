import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './../../layouts/page-not-found/page-not-found.component';
import { AuthGuard } from './../../guard/auth.guard';
import { DashboardComponent } from './../../admin/dashboard/dashboard.component';
import { LoginComponent } from './../../admin/login/login.component';
import { BooksComponent } from './../../products/books/books.component';
import { LaptopComponent } from './../../products/laptop/laptop.component';
import { PlantsComponent } from './../../products/plants/plants.component';
import { MobileComponent } from './../../products/mobile/mobile.component';
import { HomeComponent } from './../../layouts/home/home.component';
import { SamsungComponent } from './../../products/mobile/samsung/samsung.component';
import { MotorolaComponent } from './../../products/mobile/motorola/motorola.component';
import { MobileMenuComponent } from './../../products/mobile/mobile-menu/mobile-menu.component';

import { RouterModule, Routes } from '@angular/router';

const appRouts: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'mobile',
    component: MobileComponent,
    children: [
      { path: '', component: MobileMenuComponent },
      { path: 'sam', component: SamsungComponent },
      { path: 'moto', component: MotorolaComponent },
    ],
  },
  { path: 'plant', component: PlantsComponent },
  { path: 'laptop', component: LaptopComponent },
  { path: 'book', component: BooksComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'lazy',
    loadChildren: () =>
      import('src/app/lazyModule/shared/shared.module').then(
        (m) => m.SharedModule
      ),
  },
  { path: 'dash', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRouts)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
