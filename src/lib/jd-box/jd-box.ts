import { Iwe7IcssService } from 'iwe7-icss';
import { Iwe7BaseComponent } from 'iwe7-base';
import { Component, OnInit, AfterViewInit, ElementRef, Input, Injector, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jd-box',
  templateUrl: 'jd-box.html',
  styleUrls: ['./jd-box.scss'],
  providers: [Iwe7IcssService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JdBoxComponent extends Iwe7BaseComponent {
  width: string;
  @Input() icon: string = 'assets/jd/logo.png';
  @Input() title: string = 'title';
  constructor(public ele: ElementRef, injector: Injector) {
    super(injector, 'jd-box');
    this.runOutsideAngular(() => {
      this.getCyc('ngAfterViewInit').subscribe(res => {
        this.styleObj = {
          width: this.ele.nativeElement.clientWidth + 'px'
        };
      });
    });
  }
}
