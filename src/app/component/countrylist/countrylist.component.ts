import { Component } from '@angular/core';
interface Country {
  name: string;
  continent: string;
}
@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent {
  countries: Country[] = [
    { name: 'Philippines', continent: 'Asia' },
    { name: 'Spain', continent: 'Europe' },
    { name: 'Switzerland', continent: 'Europe' },
    // ... add more countries here ...
  ];

  addCountry(countryName: HTMLInputElement, continent: HTMLSelectElement) {
    const newCountry: Country = {
      name: countryName.value,
      continent: continent.value
    };
    this.countries.push(newCountry);
    countryName.value = '';
    continent.value = 'Asia'; // reset the select value to the first option
  }

}

