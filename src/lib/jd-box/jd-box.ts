import { TemplateRef, ViewEncapsulation, ContentChild } from '@angular/core';
import { Iwe7IcssService } from 'iwe7-icss';
import { Iwe7BaseComponent } from 'iwe7-base';
import { Component, ElementRef, Input, Injector, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jd-box',
  templateUrl: 'jd-box.html',
  styleUrls: ['./jd-box.scss'],
  providers: [Iwe7IcssService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class JdBoxComponent extends Iwe7BaseComponent {
  width: string;
  @Input() icon: string;
  @Input() title: string;

  @ContentChild(TemplateRef) content: TemplateRef<any>;
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
