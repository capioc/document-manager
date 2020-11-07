import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { UploadService } from './upload.service';



@NgModule({
  declarations: [UploadComponent, UploadDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  exports: [UploadComponent, UploadDialogComponent],
  entryComponents: [UploadDialogComponent], // Add the DialogComponent as entry component
  providers: [UploadService],
})
export class UploadModule { }
