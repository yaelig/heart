import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import{ServiceService}from '../service.service'
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  allpdf:any[]=[{ids:1,name:"heloo"},{ids:1,name:"rkghrg"},{ids:1,name:"xxxxxx"},{ids:2,name:"xyyyyy"},{ids:2,name:"ddddd"}]
  shoepdf:Array<any>[]=[]
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
      checked:false},
      {id:3,
        idUser:1,
        score:20,
        url:"https://translate.google.com/?hl=iw#view=home&op=translate&sl=iw&tl=en&text=%D7%94%D7%A0%D7%93%D7%A1%D7%90%D7%99",
        name:"michal",
        checked:false}]; 
    
  constructor(private service:ServiceService) { }
 x=false;
 y= Math.floor((Math.random()*100)+1);
    ngOnInit() {
    this.getUsers();
    
    }
    onSelect(hero: any): void {
    
      debugger;
      this.shoepdf=[]
      this.allpdf.forEach(element => {
        if(element.ids==hero.id)
        {
           this.shoepdf.push(element)
           
        }
      });
      this.x=true;
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
  // }

}
}
