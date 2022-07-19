import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsModule } from './shared/students.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './features-modules/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    StudentsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule//,
    /*RouterModule,
    Routes*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
