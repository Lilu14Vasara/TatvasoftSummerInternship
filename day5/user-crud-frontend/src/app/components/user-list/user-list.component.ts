import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [CommonModule, UserFormComponent],
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser?: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }
  
  blankUser(): User {
    return { id: 0, username: '', email: '' };
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  editUser(user: User) {
    this.selectedUser = { ...user };
  }

  onUserSaved() {
    this.selectedUser = undefined;
    this.loadUsers();
  }

  deleteUser(id: number) {
    if (confirm('Delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => this.loadUsers());
    }
  }
}