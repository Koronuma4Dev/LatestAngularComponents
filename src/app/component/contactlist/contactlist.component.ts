import { Component } from '@angular/core';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css'
})
export class ContactlistComponent {
  contacts: { name: string, phone: string, related: string }[] = [];

  addContact(name: string, phone: string, related: string) {
    if (name && phone && related) { 
      this.contacts.push({ name, phone, related });
    }
  }

  removeContact(index: number) {
    this.contacts.splice(index, 1);
  }
}
