import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './document-list/document-list.component';
import { AssignDialogComponent } from './assign-dialog/assign-dialog.component';
import { MatAutocompleteModule } from "@angular/material/autocomplete";  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UploadModule } from '../upload/upload.module';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [DocumentListComponent, AssignDialogComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatListModule,
    MatPaginatorModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    UploadModule
  ],
  exports: [
    DocumentListComponent
  ]
})
export class DocumentManagerModule { }
