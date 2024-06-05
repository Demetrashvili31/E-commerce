import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { cartSerivce } from '../services/cart.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  products : any[] = [];
  

  constructor(private prodsvc : ProductsService ,private cartservice : cartSerivce){
  }
  selectedChange:string = 'all'
  productFilter(data:string){
    this.selectedChange = data
  
  }
  
  
  
  ngOnInit():void{
    this.prodsvc.getProducts(14).subscribe((data :any)=>{
  this.products = data.products
  
  })
  
  
  }
  
  addtoCart(item:any){
    this.cartservice.addToCart(item)
  }
  
}
