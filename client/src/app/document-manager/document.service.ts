import { Injectable } from '@angular/core';
import { Document } from "./document";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor() { }
  
  mockDocuments: Document[] = [
    {
      id: '123',
      name: 'Document A',
      path: 'tmp/document-a',
      assignees: [
        {
          id: 'a123',
          firstname: 'Jack',
          lastname: 'Waldo'
        }
      ]
    },
    {
      id: '124',
      name: 'Document B',
      path: 'tmp/document-b',
      assignees: [
        {
          id: 'a123',
          firstname: 'Jack',
          lastname: 'Waldo'
        },
        {
          id: 'a124',
          firstname: 'John',
          lastname: 'Smith'
        },
      ]
    }
  ];

  getDocumentList(): Observable<Document[]> { 
    return of(this.mockDocuments);
  }
}
