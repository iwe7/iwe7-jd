import { Component, OnInit, Input, Injector, ChangeDetectionStrategy } from '@angular/core';
import { Iwe7BaseComponent } from 'iwe7-base';
import { Iwe7IcssService } from 'iwe7-icss';

@Component({
  selector: 'jd-swiper',
  templateUrl: 'jd-swiper.html',
  styleUrls: ['./jd-swiper.scss'],
  providers: [Iwe7IcssService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JdSwiperComponent extends Iwe7BaseComponent {
  @Input() list: any[] = [{
    image: 'https://m.360buyimg.com/mobilecms/s800x390_jfs/t20671/8/411797135/142904/501ef443/5b0d24ceN270c03f0.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp'
  }, {
    image: 'https://m.360buyimg.com/mobilecms/s800x390_jfs/t20671/8/411797135/142904/501ef443/5b0d24ceN270c03f0.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp'
  }];
  
  height: any;
  constructor(injector: Injector) {
    super(injector, 'jd-swiper');
    this.runOutsideAngular(() => {
      this.getCyc('ngAfterViewInit').subscribe(res => {
        this.height = this.ele.nativeElement.clientHeight + 'px';
        this._cd.markForCheck();
      });
    });
  }
}
