import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      const email = loginForm.value.email;
      const password = loginForm.value.password;
      console.log('Email:', email);
      console.log('Password:', password);

      this.router.navigate(['/']);
    }
  }
}
