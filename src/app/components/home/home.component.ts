import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  categories : string[] = []
  products: any[] = []
  selectedCategory: string = ''

  apiService = inject(ApiService)
  router = inject(Router)

  ngOnInit(): void {
    this.apiService.getAllCategories().subscribe(data => this.categories = data)
    this.apiService.getAllProducts().subscribe(data => this.products = data)
  }

  getProductByCategory(category: string){
    this.selectedCategory = category
    this.apiService.getProductsByCategory(category).subscribe(data => this.products = data)
  }

  getProductById(id: number){
    this.router.navigate(['/product', id])
  }

}
