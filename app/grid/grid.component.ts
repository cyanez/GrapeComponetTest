import { Component, enableProdMode, NgModule, Inject } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';

import * as wjcGrid from '@grapecity/wijmo.grid';
import { DataService } from '../data.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent  {
  
  data: any[];
    quickEdit: boolean = true;

    // DataSvc will be passed by derived classes
    constructor(@Inject(DataService) dataSvc: DataService) {
        this.data = dataSvc.getData();
    }

    initializeGrid(flex: wjcGrid.FlexGrid) {
        flex.beginningEdit.addHandler((s: wjcGrid.FlexGrid, e: wjcGrid.CellRangeEventArgs) => {
            if (e.data && e.data.type == 'keypress' && !this.quickEdit) {
                e.cancel = true;
            }
        });
    }


}
