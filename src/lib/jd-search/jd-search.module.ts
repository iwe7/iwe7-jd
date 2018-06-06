import { NgModule } from '@angular/core';

import { JdSearchComponent } from './jd-search';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [JdSearchComponent],
    declarations: [JdSearchComponent],
})
export class JdSearchModule { }
