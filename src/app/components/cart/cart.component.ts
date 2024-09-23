import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: Product[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  clearCart(): void {
    // Clear the items in the cart through the CartService
    this.cartService.clearCart();

    // Update the local items array
    this.items = [];
  }
}
