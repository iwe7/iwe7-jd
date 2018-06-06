import { Iwe7IcssService } from 'iwe7-icss';
import { Iwe7BaseComponent } from 'iwe7-base';
import { Component, OnInit, Injector, ViewEncapsulation, Input } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
@Component({
    selector: 'jd-goods-item',
    templateUrl: 'jd-goods-item.html',
    styleUrls: ['./jd-goods-item.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [Iwe7IcssService]
})
export class JdGoodsItemComponent extends Iwe7BaseComponent {
    width: string;
    @Input() title: string;
    @Input() image: string;
    big: any;
    small: any;
    @Input()
    set price(val: number) {
        val = coerceNumberProperty(val);
        const fixed = val.toFixed(2);
        const fixs = (fixed + '').split('.');
        this.big = fixs[0];
        this.small = fixs[1];
    }

    constructor(injector: Injector) {
        super(injector, 'jd-hots-item');
        this.price = 0;
        this.getCyc('ngAfterViewInit').subscribe(res => {
            const ele: HTMLElement = this.ele.nativeElement;
            const parent: HTMLElement = ele.parentElement;
            this.width = parent.clientWidth / 2 - 10 + 'px';
            this.styleObj = {
                width: this.width
            };
        });
    }
}
