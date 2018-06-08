import { Iwe7SwiperModule } from '../../../../iwe7-swiper/src/public_api';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JdSwiperComponent } from './jd-swiper';

@NgModule({
    imports: [CommonModule, Iwe7SwiperModule],
    exports: [JdSwiperComponent],
    declarations: [JdSwiperComponent],
})
export class JdSwiperModule { }
