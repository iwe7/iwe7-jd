import { Iwe7BaseComponent } from 'iwe7-base';
import { Injector } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Iwe7IcssService } from 'iwe7-icss';

@Component({
  selector: 'jd-to-top',
  template: ``,
  styleUrls: ['./jd-to-top.scss'],
  providers: [Iwe7IcssService]
})
export class JdToTopComponent extends Iwe7BaseComponent {
  _icon: string = 'assets/jd/back-to-top.png';
  @Input()
  set icon(val: string) {
    this._icon = val;
  }
  get icon() {
    return `url(${this._icon})`;
  }
  constructor(
    public ele: ElementRef,
    injector: Injector
  ) {
    super(injector, 'jd-to-top');
    this.styleObj = {
      icon: this.icon
    };
    this.getCyc('ngAfterViewInit').subscribe(res => {
      this.listen(this.ele.nativeElement, 'click').subscribe(res => {
        document.documentElement.scrollTop = 0;
      });
    });
  }
}
