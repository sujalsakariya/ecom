// product-detail.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../components/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  // Define the addToCart method
  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}
