import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Farm } from '../../model/farm/farm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  private farmsUrls: string;
  private farmsUrlDelete: string;

  constructor(private http: HttpClient) {
    this.farmsUrls = 'http://localhost:8080/AWF-app/v1/farms';
    this.farmsUrlDelete = 'http://localhost:8080/AWF-app/v1/farms/deleteFarmById';
   }

   public findAll(): Observable<Farm[]> {
    return this.http.get<Farm[]>(this.farmsUrls);
  }

  public save(farm: Farm) {
    return this.http.post<Farm>(this.farmsUrls, farm);
  }

  public delete(farm: Farm): Observable<Farm> {
    
    return this.http.request<Farm>('delete',this.farmsUrlDelete, {body: farm});
  }

  public edit(farm: Farm) {
    return this.http.post<Farm>(this.farmsUrls, farm);
  }
}
