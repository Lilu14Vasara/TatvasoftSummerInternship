import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  @Input() user: User = { id: 0, username: '', email: '' };
  @Output() saved = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  formUser: User = { id: 0, username: '', email: '' };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.formUser = { ...this.user };
  }

  ngOnChanges() {
    this.formUser = { ...this.user };
  }

  saveUser() {
    if (this.formUser.id === 0) {
      this.userService.addUser(this.formUser).subscribe(() => this.saved.emit());
    } else {
      this.userService.updateUser(this.formUser).subscribe(() => this.saved.emit());
    }
  }
}