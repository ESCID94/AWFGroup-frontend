import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Provider } from '../../model/provider/provider';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private providersUrls: string;
  private providersUrlDelete: string;

  constructor(private http: HttpClient) {
    this.providersUrls = 'http://localhost:8080/AWF-app/v1/providers';
    this.providersUrlDelete = 'http://localhost:8080/AWF-app/v1/providers/deleteProviderById';
   }

   public findAll(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.providersUrls);
  }

  public save(provider: Provider) {
    return this.http.post<Provider>(this.providersUrls, provider);
  }

  public delete(provider: Provider): Observable<Provider> {
    return this.http.request<Provider>('delete',this.providersUrlDelete, {body: provider});
  }

  public edit(provider: Provider) {
    return this.http.post<Provider>(this.providersUrls, provider);
  }
}
