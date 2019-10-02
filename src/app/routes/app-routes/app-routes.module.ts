import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { HeadersComponent } from 'src/app/headers/headers.component';
import { UsersComponent } from 'src/app/users/users.component';
import { EmployeesComponent } from 'src/app/employees/employees.component';
import { FootersComponent } from 'src/app/footers/footers.component';
import { ProductComponent } from 'src/app/app.product.component';
import { HomeComponent } from 'src/app/home/home.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { EmployeeModule } from 'src/app/employees/employee.module';

const appRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'header',component:HeadersComponent},
{path:'navigation',component:NavigationComponent},
{path:'user',component:UsersComponent},
{path:'redirect', redirectTo:'user', pathMatch:'full'},
{path:'employee',component:EmployeesComponent},
{path:'product',component:ProductComponent},
{path:'footer',component:FootersComponent},
{path:'**',component:NotFoundComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes),EmployeeModule
  ],
  exports: [
     RouterModule
  ]
})
export class AppRoutesModule { }
