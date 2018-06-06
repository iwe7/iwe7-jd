import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jd-news',
  templateUrl: 'jd-news.html',
  styleUrls: ['./jd-news.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JdNewsComponent implements OnInit {
  @Input() icon: string = 'assets/jd/jd-news-tit.png';
  @Input() list: any[] = [{
    tag: '热',
    text: '无屏，才是手机的终极研究形态！'
  }, {
    tag: '热',
    text: '无屏，才是手机的终极研究形态！'
  }];
  @Input() more: string = 'more';

  @Output() onMore: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() { }

  _more(e: any) {
    this.onMore.emit(e);
  }
}
