import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'http://localhost:8080/store';
  http: HttpClient = inject(HttpClient);

  constructor() {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  get(_id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${_id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}`, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product._id}`, product);
  }

  remove(_id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${_id}`);
  }
}
