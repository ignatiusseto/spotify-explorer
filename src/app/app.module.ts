import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search.component';
import { AboutComponent } from './components/about.component';
import { NavbarComponent } from './components/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
