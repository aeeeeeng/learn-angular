import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
=======
import { AboutComponent } from './about/about.component';
>>>>>>> aeng


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent
=======
    HomeComponent,
    AboutComponent
>>>>>>> aeng
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
