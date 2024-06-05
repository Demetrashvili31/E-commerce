import { Component, OnInit } from '@angular/core';
import { cartSerivce } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  showModal: boolean = false;
  product :any = [];
 totalPrice !:number;
  constructor(private cartService : cartSerivce){}


  ngOnInit():void{
    this.cartService.getProducts().subscribe(res=>{
      this.product = res;
      console.log(res);
      
      this.totalPrice = this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
    this.updateCart();
  }
  emptyCart(){
    this.cartService.removeAllCart()
  }
  updateCart() {
    this.cartService.getProducts().subscribe(res => {
      this.product = res;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }
  
  onCheckout() {
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
    this.cartService.removeAllCart();
  }


  increaseQuantity(product: any) {
    this.cartService.updateQuantity(product, 1);
  }

  decreaseQuantity(product: any) {
    this.cartService.updateQuantity(product, -1);
  }

}
