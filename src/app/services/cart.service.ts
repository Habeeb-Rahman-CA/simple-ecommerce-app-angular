import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartCount = signal(0);


  addToCart() {
    this.cartCount.update(count => count + 1);
  }

  getCartCount(){
    return this.cartCount()
  }
}
