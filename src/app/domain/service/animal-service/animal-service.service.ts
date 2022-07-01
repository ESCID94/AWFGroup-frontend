import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../../model/animal/animal';
import { Observable } from 'rxjs';

@Injectable()
export class AnimalService {

  private animalsUrls: string;
  private animalsUrlDelete: string;
  private animalsUrlEdit: string;

  constructor(private http: HttpClient) {
    this.animalsUrls = 'http://localhost:8080/AWF-app/v1/animals';
    this.animalsUrlDelete = 'http://localhost:8080/AWF-app/v1/animals/deleteAnimalById';
    this.animalsUrlEdit = 'http://localhost:8080/AWF-app/v1/animals/animalById';
   }

   public findAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrls);
  }

  public findById(): Observable<Animal> {
    return this.http.get<Animal>(this.animalsUrlEdit);
  }

  public save(animal: Animal) {
    return this.http.post<Animal>(this.animalsUrls, animal);
  }

  public delete(animal: Animal): Observable<Animal> {
    return this.http.request<Animal>('delete',this.animalsUrlDelete, {body: animal});
  }

  public edit(animal: Animal) {
    return this.http.post<Animal>(this.animalsUrls, animal);
  }

}
