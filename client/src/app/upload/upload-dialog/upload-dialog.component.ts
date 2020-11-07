import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { AssignDialogComponent } from 'src/app/document-manager/assign-dialog/assign-dialog.component';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {
  //TODO: declare better vars;
  progress;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  constructor( 
    public assignDialog: MatDialog,
    public uploadDialogRef: MatDialogRef<UploadDialogComponent>,
    public uploadService: UploadService,
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('file') file
  public files: Set<File> = new Set()

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }

  closeDialog() {
    // if everything was uploaded already, just close dialog
    if (this.uploadSuccessful) {
      return this.uploadDialogRef.close();
    }

    // set the component stat to "uploading"
    this.uploading = true;

    // start the upload and save the progress map
    this.progress = this.uploadService.upload(this.files);

    // convert the progress map into an array
    let allProgressObservables = [] // Array.from(this.progress.values());
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Finish';

    // the dialog should not be close while uploading
    this.canBeClosed = false;
    this.uploadDialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are complete
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      this.uploadDialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;

      // ... and the component is no longer uploading
      this.uploading = false;
    });
  }

  openAssignDialog() {
    let dialogRef = this.assignDialog.open(AssignDialogComponent, {
      width: '75%',
      height: '75%',
    })
  }
}
