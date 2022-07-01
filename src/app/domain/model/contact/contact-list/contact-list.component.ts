import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from 'src/app/domain/service/contact-service/contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;
  isShown: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.findAll().subscribe(data => {
      this.contacts = data;
    })
  }

  delete(contact: Contact) {
    this.contactService.delete(contact).subscribe(data =>
      console.log(data), error => console.log(error));
    window.location.reload();
  }

  save(contact: Contact) {
    this.contactService.save(contact).subscribe(data =>
      console.log(data), error => console.log(error));

    window.location.reload();
  }

  toggleShow() {

    this.isShown = !this.isShown;

  }

}
