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
import { SpecificationlistComponent } from './component/specificationlist/specificationlist.component';
import { ComputerhardwareComponent } from './component/computerhardware/computerhardware.component';
import { MobilelistComponent } from './component/mobilelist/mobilelist.component';
import { TVshowComponent } from './component/tvshow/tvshow.component';
import { VideolistComponent } from './component/videolist/videolist.component';
import { FurniturelistComponent } from './component/furniturelist/furniturelist.component';
import { BuildinglistComponent } from './component/buildinglist/buildinglist.component';
import { PaintinglistComponent } from './component/paintinglist/paintinglist.component';
import { ArtistlistComponent } from './component/artistlist/artistlist.component';
import { ComposerlistComponent } from './component/composerlist/composerlist.component';
import { PodcastlistComponent } from './component/podcastlist/podcastlist.component';
import { AccessorylistComponent } from './component/accessorylist/accessorylist.component';




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
  {path: 'languagelist', component:LanguagelistComponent},
  {path: 'countrylist', component:CountrylistComponent},
  {path: 'gamelist', component:GamelistComponent},
  {path: 'contactlist', component:ContactlistComponent},
  {path: 'foodmenulist', component:FoodmenulistComponent},
  {path: 'musiclist', component:MusiclistComponent},
  {path: 'grocerylist', component:GrocerylistComponent},
  {path: 'classroomlist', component:ClassroomlistComponent},
  {path: 'inventorylist', component:InventorylistComponent},
  {path: 'lecturelist', component:LecturelistComponent},
  {path: 'stationarylist', component:StationarylistComponent},
  {path: 'destinantionlist', component:DestinantionlistComponent},
  {path: 'flowerlist', component:FlowerlistComponent},
  {path: 'softwarelsit', component:SoftwarelsitComponent},
  {path: 'loptoplist', component:LoptoplistComponent},
  {path: 'specificationlist', component:SpecificationlistComponent},
  {path: 'mobilelist', component:MobilelistComponent},
  {path: 'computerhardware', component:ComputerhardwareComponent},
  {path: 'tvshow', component:TVshowComponent},
  {path: 'videolist', component:VideolistComponent},
  {path: 'furniturelist', component:FurniturelistComponent},
  {path: 'buildinglist', component:BuildinglistComponent},
  {path: 'paintinglist', component:PaintinglistComponent},
  {path: 'artistlist', component:ArtistlistComponent},
  {path: 'composerlist', component:ComposerlistComponent},
  {path: 'podcastlist', component:PodcastlistComponent},
  {path: 'accessorylist', component:AccessorylistComponent},











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
