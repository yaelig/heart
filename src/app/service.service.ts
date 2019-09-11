import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url:string="http://localhost:64502/api/users";
  constructor(private http:HttpClient) {}
    getUserById(id:number){
      return this.http.get(this.url+id).subscribe();
    }
    getAllUsers(){
      return this.http.get<User[]>(this.url);
    }
    updateCheckedUser(id:number){
      return this.http.put(this.url,id);
    }

   
}
