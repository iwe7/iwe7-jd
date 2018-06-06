import { JdTipModule } from './jd-tip/jd-tip.module';
import { NgModule } from '@angular/core';
export const JdModules = [
  JdTipModule
];

@NgModule({
  exports: [
    ...JdModules
  ],
})
export class Iwe7JdModule { }
