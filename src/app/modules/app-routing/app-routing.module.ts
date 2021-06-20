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
import { RouterModule, Routes } from '@angular/router';

const appRouts: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'plant', component: PlantsComponent },
  { path: 'laptop', component: LaptopComponent },
  { path: 'book', component: BooksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRouts)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
