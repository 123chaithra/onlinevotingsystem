import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  uid:number;
  user:User;

  constructor(private route:ActivatedRoute,private router:Router, private userService:UserserviceService) { }

  ngOnInit(): void {
    this.user = new User();
    this.uid = this.route.snapshot.params['userId'];
    this.userService.getUser(this.uid).subscribe(selectedUser=>{
      console.log(selectedUser);
      this.user = selectedUser;
    },error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['users']);
  }

  
}
