import { Iwe7SquareModule } from 'iwe7-square';
import { NgModule } from '@angular/core';

import { JdGoodsItemComponent } from './jd-goods-item';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, Iwe7SquareModule],
    exports: [JdGoodsItemComponent],
    declarations: [JdGoodsItemComponent],
})
export class JdGoodsItemModule { }
