import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sale } from '../../model/sale/sale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private salesUrls: string;
  private salesUrlDelete: string;

  constructor(private http: HttpClient) {
    this.salesUrls = 'http://localhost:8080/AWF-app/v1/sales';
    this.salesUrlDelete = 'http://localhost:8080/AWF-app/v1/sales/deleteSaleById';
   }

   public findAll(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.salesUrls);
  }

  public save(sale: Sale) {
    return this.http.post<Sale>(this.salesUrls, sale);
  }

  public delete(sale: Sale): Observable<Sale> {
    return this.http.request<Sale>('delete',this.salesUrlDelete, {body: sale});
  }

  public edit(sale: Sale) {
    return this.http.post<Sale>(this.salesUrls, sale);
  }
}
