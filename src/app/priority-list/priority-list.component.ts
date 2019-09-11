import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {User} from '../user';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-priority-list',
  templateUrl: './priority-list.component.html',
  styleUrls: ['./priority-list.component.css']
})
export class PriorityListComponent implements OnInit {
allUser:User[]=[{id:1,
  idUser:1,
  score:20,
  url:"https://translate.google.com/?hl=iw#view=home&op=translate&sl=iw&tl=en&text=%D7%94%D7%A0%D7%93%D7%A1%D7%90%D7%99",
  name:"moshe",
  checked:false}
  ,{id:2,
    idUser:2,
    score:50,
    url:"https://translate.google.com/?hl=iw#view=home&op=translate&sl=iw&tl=en&text=%D7%94%D7%A0%D7%93%D7%A1%D7%90%D7%99",
    name:"avi",
    checked:false}];
  
constructor(private service:ServiceService) { }

  ngOnInit() {
   this.getUsers();
  }
 getUsers(){
// this.service.getAllUsers().subscribe(res => {
//   res.sort(function(a,b){return b.score-a.score});
//   this.allUser=res;  
//    console.log(this.allUser[0].url);

//    console.log(res);
//  }, err => {
//    console.log(err);
//  })
}
checked(event)
{
  
  // let id:number =(Number)((<HTMLSelectElement>event.target).value);
  // debugger;
  // this.service.updateCheckedUser(id);
}
}

