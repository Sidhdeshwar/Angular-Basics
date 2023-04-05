import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';
import { QueryParamsComponent } from './query-params/query-params.component';
import { RedirectingRoutesComponent } from './redirecting-routes/redirecting-routes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TasksComponent } from './tasks/tasks.component';
import { WildCardPageNotFoundComponent } from './wild-card-page-not-found/wild-card-page-not-found.component';

const routes: Routes = [
  {
       path:'',
       redirectTo : 'queryParams',
       pathMatch : 'full'
  },
  {
     path: 'admin',   // if ................ true
     component : AdminHomeComponent,  // .................Go to Admin Compo ....
     canActivate : [AdminGuardGuard]  // return from admin gaurd === true or false 
  },
  {
    path:'products',
    children:[
    {path:'login', component:LoginComponent},
    {path:'logout', component:LogoutComponent},
    {path:'task/:id/:name/:marks', component:TasksComponent},
    ]
  },
  {
    path: 'task/:id/:name/:marks',
    component: TasksComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  // {
  //   path: '',
  //   redirectTo: '/products',    // ................... for add in default
  //   pathMatch: 'full',
  // },
  {
        path : 'login',
        component : LoginComponent
  },
  {
    path: 'logout',
    component:LogoutComponent
  },
  {
    path:'shopp',
    component:ShoppingComponent
  },
  {
    path:'queryParams',
    component:QueryParamsComponent
  },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'cartRoute', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {
    path:'**',
    component:WildCardPageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
