import { Iwe7IcssService } from 'iwe7-icss';
import { tap } from 'rxjs/operators';
import {
  Component, OnInit, Injector,
  ChangeDetectionStrategy, ViewEncapsulation,
  Input
} from '@angular/core';
import { Subject, of, fromEvent } from 'rxjs';
import { switchMap, map, filter } from 'rxjs/operators';
import { Iwe7BaseComponent } from 'iwe7-base';

@Component({
  selector: 'jd-tip',
  templateUrl: './jd-tip.html',
  styleUrls: ['./jd-tip.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Iwe7IcssService],
  encapsulation: ViewEncapsulation.None
})

export class JdTipComponent extends Iwe7BaseComponent {
  @Input() top: string = '0px';
  @Input() height: string = '45px';
  @Input() btnColor: string = '#F63515';
  @Input() bgColor: string = '#333';

  @Input() closeIcon: string = 'assets/jd/close.png';
  @Input() logoIcon: string = 'assets/jd/logo.png';

  @Input() title: string = '打开跑腿app,立即接单赚钱!';
  @Input() btnTitle: string = '立即打开';
  
  constructor(
    injector: Injector
  ) {
    super(injector, 'jd-tip');
    this.runOutsideAngular(() => {
      this.setStyleInputs(['top', 'height', 'btnColor', 'bgColor']);
      this.getCyc('ngOnInit').pipe(
        tap(res => {
          this.listen(document, 'scroll').pipe(
            switchMap(res => {
              const top = document.documentElement.scrollTop;
              return of(top);
            }),
          ).subscribe((top: number) => {
            this.top = -top + 'px';
            this.styleObj = {
              top: this.top
            };
          });
        })
      ).subscribe();
    });
  }
}
