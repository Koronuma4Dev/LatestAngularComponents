import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigateComponent } from './component/navigate/navigate.component';
import { StudentlistComponent } from './component/studentlist/studentlist.component';





const routes: Routes = [
  {path: '', component: NavigateComponent},
  {path: 'studentlist', component:StudentlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
