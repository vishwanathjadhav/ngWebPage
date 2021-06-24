import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

const lazyRoutes: Routes = [
  {
    path: '',
    component: PaymentComponent,
  },
];
@NgModule({
  declarations: [PaymentComponent],
  imports: [CommonModule, RouterModule.forChild(lazyRoutes)],
})
export class SharedModule {}
