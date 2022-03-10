import { TruncateModule } from 'projects/ngx-tools-truncate/src/lib/truncate.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TruncateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
