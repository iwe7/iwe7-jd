import { JdBoxModule } from './jd-box/jd-box.module';
import { JdSwiperModule } from './jd-swiper/jd-swiper.module';
import { JdSearchModule } from './jd-search/jd-search.module';
import { JdTipModule } from './jd-tip/jd-tip.module';
import { NgModule } from '@angular/core';
export const JdModules = [
  JdTipModule,
  JdSearchModule,
  JdSwiperModule,
  JdBoxModule
];

@NgModule({
  exports: [
    ...JdModules
  ],
})
export class Iwe7JdModule { }
