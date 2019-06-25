import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatExpansionModule,
    MatListModule
  ]
})
export class SharedModule { }
