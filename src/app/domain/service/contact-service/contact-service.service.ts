import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../../model/contact/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrls: string;

  constructor(private http: HttpClient) {
    this.contactsUrls = 'http://localhost:8080/AWF-app/v1/contacts';
   }

   public findAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrls);
  }

  public save(contact: Contact) {
    return this.http.post<Contact>(this.contactsUrls, contact);
  }
}
