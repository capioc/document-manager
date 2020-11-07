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



@NgModule({
  declarations: [DocumentListComponent, AssignDialogComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DocumentListComponent
  ]
})
export class DocumentManagerModule { }
