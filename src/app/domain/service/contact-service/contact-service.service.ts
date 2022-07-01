import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../../model/contact/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrls: string;
  private contactsUrlDelete: string;
  
  constructor(private http: HttpClient) {
    this.contactsUrls = 'http://localhost:8080/AWF-app/v1/contacts';
    this.contactsUrlDelete = 'http://localhost:8080/AWF-app/v1/contacts/deleteContactById';
   }

   public findAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrls);
  }

  public save(contact: Contact) {
    return this.http.post<Contact>(this.contactsUrls, contact);
  }

  public delete(contact: Contact): Observable<Contact> {

    return this.http.request<Contact>('delete',this.contactsUrlDelete, {body: contact});
  }

  public edit(contact: Contact) {
    return this.http.post<Contact>(this.contactsUrls, contact);
  }
}
