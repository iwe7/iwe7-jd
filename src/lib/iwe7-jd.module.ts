import { JdGoodsItemModule } from './jd-goods-item/jd-goods-item.module';
import { JdBoxModule } from './jd-box/jd-box.module';
import { JdSwiperModule } from './jd-swiper/jd-swiper.module';
import { JdSearchModule } from './jd-search/jd-search.module';
import { JdTipModule } from './jd-tip/jd-tip.module';
import { NgModule } from '@angular/core';
export const JdModules = [
  JdTipModule,
  JdSearchModule,
  JdSwiperModule,
  JdBoxModule,
  JdGoodsItemModule
];

@NgModule({
  exports: [
    ...JdModules
  ],
})
export class Iwe7JdModule { }
