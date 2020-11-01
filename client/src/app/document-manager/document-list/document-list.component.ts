import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DocumentService } from '../document.service';
import { Document } from '../document';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  documents: Document[];

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(): void {
    this.documentService.getDocumentList()
        .subscribe(docs => {
          this.documents = docs;
          console.log(this.documents);
        }); 
  }

}
