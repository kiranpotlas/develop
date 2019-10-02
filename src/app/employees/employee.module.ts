import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeHeadComponent } from './employee-head/employee-head.component';
import { EmployeeWorkhComponent } from './employee-workh/employee-workh.component';
import { RouterModule,Routes } from '@angular/router';
const empRoutes:Routes=[
  {path:'employee',component:EmployeeComponent},
  {path:'details',component:EmployeeDetailsComponent},
  {path:'head',component:EmployeeHeadComponent},
  {path:'workh',component:EmployeeWorkhComponent}
];

@NgModule({
  declarations: [EmployeeComponent,EmployeeDetailsComponent,EmployeeHeadComponent,EmployeeWorkhComponent],
  imports: [
    CommonModule,FormsModule, RouterModule.forChild(empRoutes)
  ],
 exports:[RouterModule]
})
export class EmployeeModule { }
