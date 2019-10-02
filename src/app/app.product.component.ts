import {Component} from '@angular/core'
@Component({
    selector:'app-products',
    template:`<h1>apple</h1>
   <h1>{{details()}}</h1>
   <h2>{{product}}</h2>
    `})
export class ProductComponent{
    product:string="This is the best product";
    productId=1234;
    public details():number{
     return this.productId;
    }
}