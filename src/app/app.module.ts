import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './app.product.component';
import {ProsaleComponent } from './app.prosale.component';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutesModule } from './routes/app-routes/app-routes.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,ProductComponent,ProsaleComponent, HeadersComponent, FootersComponent, UsersComponent, EmployeesComponent, NavigationComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
