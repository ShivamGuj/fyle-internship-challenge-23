import { Component, OnInit, EventEmitter, Output, NgModule } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})



export class UserInputComponent implements OnInit {
  
  @Output() onUserSearch: EventEmitter<any> = new EventEmitter();

  faGithub = faGithub;
  userSearch : FormGroup;

  constructor(private fb: FormBuilder) {
    this.userSearch = this.fb.group({
      username: [''], // default value
    });
  }

  ngOnInit(): void {}

  onUserSubmit() {
    this.onUserSearch.emit(this.userSearch.value.username);
    this.userSearch.reset();
  }
}