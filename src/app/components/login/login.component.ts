import { Component } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: Login = {};
  showMessage: boolean = false;

  constructor(private usersService: UsersService, private router: Router){

  }
  submit():void {
    const user = this.usersService.login(this.loginForm);
    if(user){
     this.usersService.setCurrentUser(user);
     this.router.navigate(["view"]);
    }
    else {
     this.showMessage = true;
    }
   }


}
