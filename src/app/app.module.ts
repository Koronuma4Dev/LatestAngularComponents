import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateComponent } from './component/navigate/navigate.component';
import { StudentlistComponent } from './component/studentlist/studentlist.component';
import { FruitlistComponent } from './component/fruitlist/fruitlist.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';
import { CourselistComponent } from './component/courselist/courselist.component';
import { BooklistComponent } from './component/booklist/booklist.component';
import { CitylistComponent } from './component/citylist/citylist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    StudentlistComponent,
    FruitlistComponent,
    EmployeelistComponent,
    CourselistComponent,
    BooklistComponent,
    CitylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
