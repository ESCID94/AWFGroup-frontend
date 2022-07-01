import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../model/product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrls: string;
  private productsUrlDelete: string;

  constructor(private http: HttpClient) {
    this.productsUrls = 'http://localhost:8080/AWF-app/v1/products';
    this.productsUrlDelete = 'http://localhost:8080/AWF-app/v1/products/deleteProductById';
   }

   public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrls);
  }

  public save(product: Product) {
    return this.http.post<Product>(this.productsUrls, product);
  }

  public delete(product: Product): Observable<Product> {
    return this.http.request<Product>('delete',this.productsUrlDelete, {body: product});
  }

  public edit(product: Product) {
    return this.http.post<Product>(this.productsUrls, product);
  }
}
