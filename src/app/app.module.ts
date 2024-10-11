import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { LanguagelistComponent } from './component/languagelist/languagelist.component';
import { CountrylistComponent } from './component/countrylist/countrylist.component';
import { GamelistComponent } from './component/gamelist/gamelist.component';
import { ContactlistComponent } from './component/contactlist/contactlist.component';
import { FoodmenulistComponent } from './component/foodmenulist/foodmenulist.component';
import { MusiclistComponent } from './component/musiclist/musiclist.component';
import { GrocerylistComponent } from './component/grocerylist/grocerylist.component';
import { ClassroomlistComponent } from './component/classroomlist/classroomlist.component';
import { InventorylistComponent } from './component/inventorylist/inventorylist.component';
import { LecturelistComponent } from './component/lecturelist/lecturelist.component';
import { StationarylistComponent } from './component/stationarylist/stationarylist.component';
import { DestinantionlistComponent } from './component/destinantionlist/destinantionlist.component';

import { FlowerlistComponent } from './component/flowerlist/flowerlist.component';
import { SoftwarelsitComponent } from './component/softwarelsit/softwarelsit.component';
import { LoptoplistComponent } from './component/loptoplist/loptoplist.component';

import { ComputerhardwareComponent } from './component/computerhardware/computerhardware.component';
import { SpecificationlistComponent } from './component/specificationlist/specificationlist.component';
import { MobilelistComponent } from './component/mobilelist/mobilelist.component';
import { TVshowComponent } from './component/tvshow/tvshow.component';
import { VideolistComponent } from './component/videolist/videolist.component';
import { FurniturelistComponent } from './component/furniturelist/furniturelist.component';
import { BuildinglistComponent } from './component/buildinglist/buildinglist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    StudentlistComponent,
    FruitlistComponent,
    EmployeelistComponent,
    CourselistComponent,
    BooklistComponent,
    CitylistComponent,
    MovielistComponent,

    ProductlistComponent,
      CarlistComponent,
      SubjectlistComponent,
      SportlistComponent,
      VegetableslistComponent,
      AnimallistComponent,
      ToollistComponent,
      LanguagelistComponent,
      CountrylistComponent,
      GamelistComponent,
      ContactlistComponent,
      FoodmenulistComponent,
      MusiclistComponent,
      GrocerylistComponent,
      ClassroomlistComponent,
      InventorylistComponent,
      LecturelistComponent,
      StationarylistComponent,
      DestinantionlistComponent,
    
      FlowerlistComponent,
            SoftwarelsitComponent,
            LoptoplistComponent,
          
            ComputerhardwareComponent,
              SpecificationlistComponent,
              MobilelistComponent,
              TVshowComponent,
              VideolistComponent,
              FurniturelistComponent,
              BuildinglistComponent,
             
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
