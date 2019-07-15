import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { PrayListComponent } from '../pray-list/pray-list.component';
import { SharedModule } from '../../shared/shared.module'

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild([
        {path: '', component: PrayListComponent}
      ])
    ],
    declarations: [
      PrayListComponent
    ],
    exports: [
        CommonModule,
        SharedModule,
        RouterModule,
        PrayListComponent
    ]
})

export class PrayListModule { }