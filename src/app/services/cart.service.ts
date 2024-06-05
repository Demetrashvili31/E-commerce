import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})


export class cartSerivce{

cartItemList: any[] = [];
  productList = new BehaviorSubject<any[]>([]);

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: any) {
    const existingProduct = this.cartItemList.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      this.cartItemList.push(product);
    }
    this.productList.next(this.cartItemList);
  }

  getTotalPrice(): number {
    return this.cartItemList.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeCartItem(product: any) {
    this.cartItemList = this.cartItemList.filter(item => item.id !== product.id);
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  updateQuantity(product: any, quantity: number) {
    const existingProduct = this.cartItemList.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
      if (existingProduct.quantity <= 0) {
        this.removeCartItem(existingProduct);
      }
    }
    this.productList.next(this.cartItemList);
  }
}