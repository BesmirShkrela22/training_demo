import { Component } from '@angular/core';
import { RegisterData } from './register';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: RegisterData = {};

  constructor(private usersService: UsersService,
    private router: Router) { }


  submit(): void {
    this.usersService.addUser(this.registerForm);
    this.router.navigate(['/login']);
  }
}