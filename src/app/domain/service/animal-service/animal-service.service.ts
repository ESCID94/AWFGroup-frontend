import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../../model/animal/animal';
import { Observable } from 'rxjs';

@Injectable()
export class AnimalService {

  private animalsUrls: string;

  constructor(private http: HttpClient) {
    this.animalsUrls = 'http://localhost:8080/AWF-app/v1/animals';
   }

   public findAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrls);
  }

  public save(animal: Animal) {
    return this.http.post<Animal>(this.animalsUrls, animal);
  }
}
