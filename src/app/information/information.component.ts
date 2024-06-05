import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
 product : any;
productID! : number;
 constructor(private productservice : ProductsService, private activated : ActivatedRoute){}

 ngOnInit(){
  this.productID= +this.activated.snapshot.params['id'];
  console.log(this.productID);
  

 this.productservice.getProducts().subscribe((data :any)=>{
  this.product = data.products.find((item:any)=>item.id===this.productID)
  console.log(this.product);
  
 })

 }
}
