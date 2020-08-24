import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as WjCore from '@grapecity/wijmo';

@Component({
  selector: 'app-filter-grid',
  templateUrl: './filter-grid.component.html',
  styleUrls: ['./filter-grid.component.css']
})
export class FilterGridComponent {
 
  // create our CollectionView
  data = new WjCore.CollectionView([], {
    groupDescriptions: ['make'] // group my make
  });

  // and populate it from the JSON data source
  // the data is stored in a https://jsonbin.io/ public repo
  constructor(private http: HttpClient) {
    this.http.get('https://api.jsonbin.io/b/5f0765bc5d4af74b01295f26')
      .subscribe(data => {
        this.data.sourceCollection = data;
      });
  }

}
