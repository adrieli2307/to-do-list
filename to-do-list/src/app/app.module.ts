import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfTaskComponent } from './list-of-task/list-of-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfTaskComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
