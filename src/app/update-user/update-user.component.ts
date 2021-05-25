import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  uid : number;
  user : User;
  constructor(private route:ActivatedRoute,
    private router:Router,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.user = new User();
    this.uid = this.route.snapshot.params['userId'];
    this.userService.getUser(this.uid).subscribe(
      selectedUser => {
        console.log(selectedUser);
        this.user = selectedUser;
      }, error => console.log(error)
    );
  }

  updateUser() {
    this.userService.updateUser(this.uid,this.user).subscribe(
      updatedProduct =>{
      console.log(updatedProduct);
      this.user = new User();
      this.goToUserList();
      }, error => console.log(error)
    );
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }
  onSubmit(){
    this.updateUser();
  }

}
