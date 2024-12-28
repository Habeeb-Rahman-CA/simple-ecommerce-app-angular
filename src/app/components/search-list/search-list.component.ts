import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.css'
})
export class SearchListComponent {
  searchQuery : string = ''
  results : any[] = []

  apiService = inject(ApiService)

  searchProduct(){
    if (!this.searchQuery.trim()) {
      this.results = [];
      return;
    }
    this.apiService.getAllProducts().subscribe((data: any) => {
      this.results = data.filter((product: any) => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    })
  }
}
