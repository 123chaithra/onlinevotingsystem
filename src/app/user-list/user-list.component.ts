import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : Observable<User[]>;
  constructor(private userService:UserserviceService,private router:Router) { }
  currentUser = {};

  ngOnInit(): void {
    this.currentUser =JSON.parse(localStorage.getItem("user"));
    this.reloadUserData();
  }
   
  reloadUserData(){
    this.userService.getUsersList().subscribe(
      users =>{
        this.users = users
      }
    );
  }
  
   removeUser(userId:number){
     this.userService.deleteUser(userId).subscribe(
       result =>{
          console.log(result);
          alert(userId + "deleted successfully");
          this.reloadUserData();
       },
       error => console.log(error)
     );
     
   }

    UserDetails(userId:number){
      this.router.navigate(['details',userId]);
    }

    createUser(){
      this.router.navigate(['add']);
    }

    updateUser(userId:number){
      this.router.navigate(['update',userId]);
    }

}
