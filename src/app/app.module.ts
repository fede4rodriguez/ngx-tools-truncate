
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { TruncateModule } from '@ngx-tools/truncate';

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
