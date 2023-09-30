import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import {Observable}from'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url="http://localhost:8080/"

  constructor(private http:HttpClient) { }

  //add user -> CREATE
  adduser(user:User){
    return this.http.post<User>(`${this.url}add`,user)
  }

  //getuser-> READ
  getUsers():Observable<any[]>{
    return this.http.get<any[]>(this.url+'users')
  }

  //getusers by id->READ
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${this.url}user/${id}`)
  }

  //update User -> UPDATE
  updateUser(id?:number,user?:any):Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`,user)
  }

  //delete User->DELETE
  deleteUser(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }





}
