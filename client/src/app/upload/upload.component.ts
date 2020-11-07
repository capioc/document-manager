import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(public dialog: MatDialog, public uploadService: UploadService) {}

  public openUploadDialog() {
    let dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '75%',
      height: '75%',
    })
  }

  ngOnInit(): void {
  }

}
