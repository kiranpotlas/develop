import { Component } from "@angular/core";

@Component({
    selector:'app-prosale',
    template:`<h2>{{address()}}</h2><h1>The sale of Apples in Market today was {{sale}}</h1>`
})
export class ProsaleComponent{
    sale:number=1000;
     public address():number{
       return this.sale;

    }
}