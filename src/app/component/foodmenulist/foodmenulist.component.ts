import { Component } from '@angular/core';




@Component({
  selector: 'app-foodmenulist',
  templateUrl: './foodmenulist.component.html',
  styleUrl: './foodmenulist.component.css'
})
export class FoodmenulistComponent {
  foodmenulist:string[] = [
    'Chicken Adobo with rice',
    'Pesto pasta',
   'Tuna sandwhich',
    'Water bottle'

 ];

 addFoodmenu(foodmenuInput: HTMLInputElement){
   const foodmenu= foodmenuInput.value.trim();

   if(foodmenu){
     this.foodmenulist.push(foodmenu);
       foodmenuInput.value='';
     
   }
 }
 removeFoodmenu(index: number){
   this.foodmenulist.splice(index, 1);
 }
 
}
