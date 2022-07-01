import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Buyer } from '../../model/buyer/buyer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private buyersUrls: string;
  private buyersUrlDelete: string;

  constructor(private http: HttpClient) {
    this.buyersUrls = 'http://localhost:8080/AWF-app/v1/buyers';
    this.buyersUrlDelete = 'http://localhost:8080/AWF-app/v1/buyers/deleteBuyerById';
   }

   public findAll(): Observable<Buyer[]> {
    return this.http.get<Buyer[]>(this.buyersUrls);
  }

  public save(buyer: Buyer) {
    return this.http.post<Buyer>(this.buyersUrls, buyer);
  }

  public delete(buyer: Buyer): Observable<Buyer> {
    return this.http.request<Buyer>('delete',this.buyersUrlDelete, {body: buyer});
  }

  public edit(buyer: Buyer) {
    return this.http.post<Buyer>(this.buyersUrls, buyer);
  }
}
