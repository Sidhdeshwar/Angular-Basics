import { HashLocationStrategy, LocationStrategy,PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightPipe } from './highlight.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { QueryParamsComponent } from './query-params/query-params.component';
import { RedirectingRoutesComponent } from './redirecting-routes/redirecting-routes.component';
import { WildCardPageNotFoundComponent } from './wild-card-page-not-found/wild-card-page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe,
    TasksComponent,
    ProductsComponent,
    LoginComponent,
    LogoutComponent,
    ShoppingComponent,
    QueryParamsComponent,
    RedirectingRoutesComponent,
    WildCardPageNotFoundComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide:LocationStrategy,
      useClass :PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
