import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    MatSelectModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    MatSelectModule
  ]
})
export class SharedModule { }
