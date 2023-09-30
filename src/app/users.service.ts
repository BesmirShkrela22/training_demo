import { Injectable } from '@angular/core';
import { Login } from './components/login/login';
import { User } from './User';
import { RegisterData } from './components/register/register';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersList: Array<User> = [];
  currentUser!: User | undefined;

  constructor() { }

  login(data:Login): User | undefined {
    return this.usersList.find(user => user.email === data.email && user.password === data.password);
  }

  
  setCurrentUser(user: User | undefined){
    this.currentUser = user;
  }
  addUser(data: RegisterData){
    const user: User = {
     id: this.usersList.length,
     name: data.name,
     surname: data.surname,
     email: data.email,
     password: data.password
    };
    this.usersList.push(user);
  }



  
}
