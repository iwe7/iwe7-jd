import { JdSearchModule } from './jd-search/jd-search.module';
import { JdTipModule } from './jd-tip/jd-tip.module';
import { NgModule } from '@angular/core';
export const JdModules = [
  JdTipModule,
  JdSearchModule
];

@NgModule({
  exports: [
    ...JdModules
  ],
})
export class Iwe7JdModule { }
