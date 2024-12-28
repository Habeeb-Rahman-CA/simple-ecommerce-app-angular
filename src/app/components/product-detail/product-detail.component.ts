import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product : any

  apiService = inject(ApiService)
  cartService = inject(CartService)
  route = inject(ActivatedRoute)

  ngOnInit(): void {
      const productId = Number(this.route.snapshot.paramMap.get('id'))
      this.apiService.getProductById(productId).subscribe(data => this.product = data)
  }

  addToCart(){
    alert('Product added to cart')
    this.cartService.addToCart()
  }

}
