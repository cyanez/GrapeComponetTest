import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
;
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { GridComponent } from './grid/grid.component';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjChartAnimationModule } from '@grapecity/wijmo.angular2.chart.animation';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { FilterGridComponent } from './filter-grid/filter-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    BarGraphComponent,
    FilterGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    FormsModule,
    WjGridModule,
    WjChartModule,
    WjChartAnimationModule,
    WjGridFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
