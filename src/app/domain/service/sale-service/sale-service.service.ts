import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sale } from '../../model/sale/sale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private salesUrls: string;

  constructor(private http: HttpClient) {
    this.salesUrls = 'http://localhost:8080/AWF-app/v1/sales';
   }

   public findAll(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.salesUrls);
  }

  public save(sale: Sale) {
    return this.http.post<Sale>(this.salesUrls, sale);
  }
}
