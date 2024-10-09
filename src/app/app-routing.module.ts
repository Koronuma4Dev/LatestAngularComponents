import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigateComponent } from './component/navigate/navigate.component';
import { StudentlistComponent } from './component/studentlist/studentlist.component';
import { FruitlistComponent } from './component/fruitlist/fruitlist.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';
import { CourselistComponent } from './component/courselist/courselist.component';
import { BooklistComponent } from './component/booklist/booklist.component';
import { CitylistComponent } from './component/citylist/citylist.component';
import { MovielistComponent } from './component/movielist/movielist.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { CarlistComponent } from './component/carlist/carlist.component';
import { SubjectlistComponent } from './component/subjectlist/subjectlist.component';
import { SportlistComponent } from './component/sportlist/sportlist.component';
import { VegetableslistComponent } from './component/vegetableslist/vegetableslist.component';
import { AnimallistComponent } from './component/animallist/animallist.component';
import { ToollistComponent } from './component/toollist/toollist.component';



const routes: Routes = [
  {path: '', component: NavigateComponent},
  {path: 'studentlist', component:StudentlistComponent },
  {path: 'fruitlist', component:FruitlistComponent},
  {path: 'employeelist', component:EmployeelistComponent},
  {path: 'courselist', component:CourselistComponent},
  {path: 'booklist', component:BooklistComponent},
  {path: 'citylist', component:CitylistComponent},
  {path: 'movielist', component:MovielistComponent},
  {path: 'productlist', component:ProductlistComponent},
  {path: 'carlist', component:CarlistComponent},
  {path: 'subjectlist', component:SubjectlistComponent},
  {path: 'sportlist', component:SportlistComponent},
  {path: 'vegetableslist', component:VegetableslistComponent},
  {path: 'animallist', component:AnimallistComponent},
  {path: 'toollist', component:ToollistComponent},










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
