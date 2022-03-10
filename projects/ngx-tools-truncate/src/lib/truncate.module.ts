import { NgModule } from '@angular/core';
import { TruncateService } from './service/truncate.service';

@NgModule({
  providers: [TruncateService],
  exports: []
})
export class TruncateModule { }
