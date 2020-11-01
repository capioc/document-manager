import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './document-list/document-list.component';



@NgModule({
  declarations: [DocumentListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DocumentListComponent
  ]
})
export class DocumentManagerModule { }
