import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadModule } from './upload/upload.module';
import { DocumentManagerModule } from './document-manager/document-manager.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UploadModule,
    DocumentManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
