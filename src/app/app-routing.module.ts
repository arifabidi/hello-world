import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  { path: 'one',  component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'customers', data: { breadcrumb: 'Customers'}, loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', data: { breadcrumb: 'Orders'},  loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {
    path: '', redirectTo: '',  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
