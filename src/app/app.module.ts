import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translate-component/translate.component';
import {MatRadioModule} from '@angular/material';
//import {MatInput} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,TranslatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
