import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
  }

  getAllCategories(): Observable<string[]>{
    return this.http.get<string[]>(`${this.baseUrl}/categories`)
  }
  
  getProductsByCategory(category: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/category/${category}`)
  }

  getProductById(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

}
