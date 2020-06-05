import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DefenseCalculatorComponent } from './defense-calculator/defense-calculator.component';
import { DefenseBuilderComponent } from './defense-builder/defense-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'calculator', component: DefenseCalculatorComponent },
  { path: 'builder', component: DefenseBuilderComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    DefenseCalculatorComponent,
    DefenseBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
