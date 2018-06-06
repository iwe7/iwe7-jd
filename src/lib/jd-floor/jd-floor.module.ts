import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JdFloorComponent } from './jd-floor';
import { MatGridListModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, MatGridListModule],
    exports: [JdFloorComponent],
    declarations: [JdFloorComponent],
    providers: [],
})
export class JdFloorModule { }
