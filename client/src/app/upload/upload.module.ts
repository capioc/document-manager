import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { UploadService } from './upload.service';
import { AssignDialogComponent } from '../document-manager/assign-dialog/assign-dialog.component';



@NgModule({
  declarations: [UploadComponent, UploadDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  exports: [UploadComponent, UploadDialogComponent],
  entryComponents: [UploadDialogComponent, AssignDialogComponent], // Add the DialogComponent as entry component
  providers: [UploadService],
})
export class UploadModule { }
