import { Component, Inject, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'bootstrap/dist/css/bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';

import {  GraphDataService } from '../graph-data.service';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent {

  data: any[];
  //
  constructor(@Inject(GraphDataService) private dataService: GraphDataService) {
      this.data = dataService.getData();
  }
  

}
