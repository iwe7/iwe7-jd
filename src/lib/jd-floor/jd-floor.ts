import { Component, OnInit, ViewEncapsulation, TemplateRef, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'jd-floor',
  templateUrl: 'jd-floor.html',
  styleUrls: ['./jd-floor.scss'],
  encapsulation: ViewEncapsulation.None
})

export class JdFloorComponent implements OnInit {
  @ContentChild('title', {
    read: TemplateRef
  }) title: TemplateRef<any>;

  @Input() cols = 1;
  @Input() rowHeight = '100px';
  @Input() grids = [
    { cols: 1, rows: 1, color: 'lightblue' },
  ];

  @ContentChild('content', {
    read: TemplateRef
  }) content: TemplateRef<any>;
  constructor() { }

  ngOnInit() { }
}
