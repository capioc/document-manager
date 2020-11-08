import {COMMA, ENTER} from '@angular/cdk/keycodes'; 
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/user/user.service';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/user/user';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-assign-dialog',
  templateUrl: './assign-dialog.component.html',
  styleUrls: ['./assign-dialog.component.scss']
})
export class AssignDialogComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  userControl = new FormControl();
  users$: Observable<User[]>;
  // assignedUsers: User[];
  private searchTerms = new Subject<string>();
  
  @ViewChild('userInput') userInput: ElementRef<HTMLInputElement>;
  // @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor(
    public dialogRef: MatDialogRef<AssignDialogComponent>,
    public userService: UserService,
    @Inject(MAT_DIALOG_DATA) public assignedUsers: User[]
  ) { }

  ngOnInit(): void {
    if (!this.assignedUsers) this.assignedUsers = [];
    
    this.users$ = this.userControl.valueChanges
      .pipe(
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),
        tap(x => console.log('ngOn',x)),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.userService.getUsersByName(term)),
      );
  }

  remove(user: User): void {
    const index = this.assignedUsers.findIndex(u => {
      return (u.firstname === user.firstname) && (u.lastname === user.lastname);
    });

    if (index >= 0) {
      this.assignedUsers.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.assignedUsers.push(event.option.value);
    this.userInput.nativeElement.value = '';
    this.userControl.setValue(null);
  }
}
