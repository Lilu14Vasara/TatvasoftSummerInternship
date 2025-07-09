import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    username: '',
    password: ''
  };

  onSubmit() {
    console.log('Form Submitted:', this.user);
    alert(`Username: ${this.user.username}\nPassword: ${this.user.password}`);
  }
}
