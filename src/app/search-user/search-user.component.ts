import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import{ServiceService}from '../service.service'
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  allUser:User[]=[];
  
  constructor(private service:ServiceService) { }
  
    ngOnInit() {
     this.getUsers();
    }
   getUsers(){
  this.service.getAllUsers().subscribe(res => {
    res.sort(function(a,b){return b.score-a.score});
    this.allUser=res;  
     console.log(this.allUser[0].url);
  
     console.log(res);
   }, err => {
     console.log(err);
   })
  }
}
