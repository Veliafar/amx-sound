import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeComponent } from './home/home.component';
import { HomeMainComponent } from './home-main/home-main.component';


@NgModule({
    declarations: [
        HomeHeaderComponent,
        HomeMainComponent,
        HomeFooterComponent,
        HomeComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HomeModule { }