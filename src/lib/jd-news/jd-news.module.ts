import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JdNewsComponent } from './jd-news';
import { Iwe7SwiperModule } from 'iwe7-swiper';

@NgModule({
    imports: [CommonModule, Iwe7SwiperModule],
    exports: [JdNewsComponent],
    declarations: [JdNewsComponent],
    providers: [],
})
export class JdNewsModule { }
