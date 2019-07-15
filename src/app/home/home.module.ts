import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { PrayListModule } from '../work-content/pray-list/pray-list.module';
import { HomeComponent } from './home.component';
import { LeftSideBarComponent } from '../left-side-bar/left-side-bar.component'
import { SharedModule } from '../shared/shared.module'

const routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', loadChildren: '../work-content/pray-list/pray-list.module#PrayListModule'}
    ]
  }
];

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild(routes),
    ],
    declarations: [
      HomeComponent, 
      LeftSideBarComponent,
    ],
    exports: [
        CommonModule,
        SharedModule,
        SharedModule,
        HomeComponent,
        LeftSideBarComponent
    ]
})

export class HomeModule { }
