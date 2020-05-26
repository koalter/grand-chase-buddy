import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DefenseCalculatorComponent } from './defense-calculator/defense-calculator.component';
import { DefenseBuilderComponent } from './defense-builder/defense-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    DefenseCalculatorComponent,
    DefenseBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
