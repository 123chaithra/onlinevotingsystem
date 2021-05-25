import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user : User = new User();
  submitted = false;

  constructor(private router:Router, private userService:UserserviceService) { }

  ngOnInit(): void {
  }
 
  createUser() {
    this.userService.createUser(this.user).subscribe(
      result => {
        console.log(result);
        this.user = new User();
        this.goToUserList();
        window.location.href = '/';
      },
      error => console.log(error)
    );
  }

  goToUserList() {
    this.router.navigate(['users']);
  }

  onSubmit() {
    this.submitted = true;
    this.createUser();
  }

}
