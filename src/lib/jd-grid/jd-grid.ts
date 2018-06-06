import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
@Component({
  selector: 'jd-grid',
  templateUrl: 'jd-grid.html',
  styleUrls: ['./jd-grid.scss']
})

export class JdGridComponent implements OnInit {
  _cols: number = 2;
  @Input()
  set cols(val: any) {
    this._cols = coerceNumberProperty(val);
  }
  get cols() {
    const items = [];
    for (let i = 0; i < this._cols; i++) {
      items.push(i);
    }
    return items;
  }

  _rows: number = 4;
  @Input()
  set rows(val: any) {
    this._rows = coerceNumberProperty(val);
  }
  get rows() {
    const items = [];
    for (let i = 0; i < this._rows; i++) {
      items.push(i);
    }
    return items;
  }
  @ContentChild(TemplateRef) tpl: TemplateRef<any>;
  constructor() { }
  ngOnInit() { }
}
