import { JdBoxModule } from '../jd-box/jd-box.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JdGridComponent } from './jd-grid';

@NgModule({
    imports: [CommonModule, JdBoxModule],
    exports: [JdGridComponent],
    declarations: [JdGridComponent],
})
export class JdGridModule { }
