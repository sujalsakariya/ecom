// cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  constructor() { }

  // Add product to cart
  addToCart(product: Product): void {
    this.items.push(product);
  }

  // Get items in the cart
  getItems(): Product[] {
    return this.items;
  }

  // Clear items from the cart
  clearCart(): void {
    this.items = [];
  }
}
