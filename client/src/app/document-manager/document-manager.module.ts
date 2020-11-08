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
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DocumentListComponent
  ]
})
export class DocumentManagerModule { }
