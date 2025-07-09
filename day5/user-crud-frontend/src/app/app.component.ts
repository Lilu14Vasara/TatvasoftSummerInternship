import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [UserListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent { }