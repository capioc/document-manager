import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { DocumentService } from '../document.service';
import { Document } from '../document';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  documents: Document[];
  totalNumber: number;
  // pageEvent: PageEvent;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.getCollectionSize();
    this.getDocuments(0,this.pageSize);
  }

  onChangePage($event) {
    // let skip = this.paginatorService($event.pageIndex,$event.pageSize);
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.getDocuments(this.pageIndex, this.pageSize);
  }

  onUploadFinished($event) {
    this.getDocuments(this.pageIndex, this.pageSize);
  }

  deleteDocument(document) {
    console.log('action fired',document)
    const index = this.documents.findIndex(d => {
      return (d._id === document._id);
    });

    if (index >= 0) {
      this.documentService.deleteOne(document)
      .subscribe(res => {
        if(res.deletedCount > 0) {
          this.documents.splice(index, 1);
        }
        this.getCollectionSize();
        this.getDocuments(this.pageIndex, this.pageSize);
      })

    }    
  }

  getDocuments(page, pageSize): void {
    let skip = this.paginatorService(page, pageSize);
    this.documentService.getDocumentList(skip, pageSize)
        .subscribe(docs => {
          this.documents = docs;
          console.log(this.documents);
        }); 
  }

  getCollectionSize() {
    this.documentService.getCollectionSize()
      .subscribe(x => this.totalNumber = x);
  }

  private paginatorService(page, pageSize) {
    let skip = page * pageSize;
    return skip;
  }

}
