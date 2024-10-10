import { Component } from '@angular/core';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css'
})
export class ContactlistComponent {
  contacts: string[] = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson'
  ];

  addContact(newContact: string) {
    if (newContact) {
      this.contacts.push(newContact);
    }
  }

  removeContact(contact: string) {
    this.contacts = this.contacts.filter(item => item !== contact);
  }
}
