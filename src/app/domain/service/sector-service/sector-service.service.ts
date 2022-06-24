import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sector } from '../../model/sector/sector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private sectorsUrls: string;

  constructor(private http: HttpClient) {
    this.sectorsUrls = 'http://localhost:8080/AWF-app/v1/sectors';
   }

   public findAll(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.sectorsUrls);
  }

  public save(sector: Sector) {
    return this.http.post<Sector>(this.sectorsUrls, sector);
  }
}
