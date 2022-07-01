import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sector } from '../../model/sector/sector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private sectorsUrls: string;
  private sectorsUrlDelete: string;

  constructor(private http: HttpClient) {
    this.sectorsUrls = 'http://localhost:8080/AWF-app/v1/sectors';
    this.sectorsUrlDelete = 'http://localhost:8080/AWF-app/v1/sectors/deleteSectorById';
   }

   public findAll(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.sectorsUrls);
  }

  public save(sector: Sector) {
    return this.http.post<Sector>(this.sectorsUrls, sector);
  }

  public delete(sector: Sector): Observable<Sector> {
    return this.http.request<Sector>('delete',this.sectorsUrlDelete, {body: sector});
  }

  public edit(sector: Sector) {
    return this.http.post<Sector>(this.sectorsUrls, sector);
  }
}
