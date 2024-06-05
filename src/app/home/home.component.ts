import { Component ,OnInit} from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Observable, fromEvent } from 'rxjs';
// import { Product } from './product';
import { CategoryfilterService } from '../categoryfilter.service';
import { cartSerivce } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
products : any[] = [];
  

constructor(private prodsvc : ProductsService ,private cartservice : cartSerivce){
}
selectedChange:string = 'all'
productFilter(data:string){
  this.selectedChange = data

}



ngOnInit():void{
  this.prodsvc.getProducts(20).subscribe((data :any)=>{
this.products = data.products

})


}

addtoCart(item:any){
  this.cartservice.addToCart(item)
}


}





