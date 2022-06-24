import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Buyer } from '../../model/buyer/buyer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private buyersUrls: string;

  constructor(private http: HttpClient) {
    this.buyersUrls = 'http://localhost:8080/AWF-app/v1/buyers';
   }

   public findAll(): Observable<Buyer[]> {
    return this.http.get<Buyer[]>(this.buyersUrls);
  }

  public save(buyer: Buyer) {
    return this.http.post<Buyer>(this.buyersUrls, buyer);
  }
}
