import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateComponent } from './component/navigate/navigate.component';
import { StudentlistComponent } from './component/studentlist/studentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    StudentlistComponent
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
