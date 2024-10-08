import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigateComponent } from './component/navigate/navigate.component';
import { StudentlistComponent } from './component/studentlist/studentlist.component';
import { FruitlistComponent } from './component/fruitlist/fruitlist.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';
import { CourselistComponent } from './component/courselist/courselist.component';
import { BooklistComponent } from './component/booklist/booklist.component';
import { CitylistComponent } from './component/citylist/citylist.component';






const routes: Routes = [
  {path: '', component: NavigateComponent},
  {path: 'studentlist', component:StudentlistComponent },
  {path: 'fruitlist', component:FruitlistComponent},
  {path: 'employeelist', component:EmployeelistComponent},
  {path: 'courselist', component:CourselistComponent},
  {path: 'booklist', component:BooklistComponent},
  {path: 'citylist', component:CitylistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
