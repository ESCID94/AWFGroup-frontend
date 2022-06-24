import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Provider } from '../../model/provider/provider';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private providersUrls: string;

  constructor(private http: HttpClient) {
    this.providersUrls = 'http://localhost:8080/AWF-app/v1/providers';
   }

   public findAll(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.providersUrls);
  }

  public save(provider: Provider) {
    return this.http.post<Provider>(this.providersUrls, provider);
  }
}
