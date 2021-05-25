import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { ElectionofficerserviceService } from '../electionofficerservice.service';
import { Admin } from '../models/Admin';
import { ElectionOfficer } from '../models/ElectionOfficer';
import { RegisteredSocietyVoters } from '../models/RegisteredSocietyVoters';
import { User } from '../models/User';
import { RegsocietyserviceService } from '../regsocietyservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  useremailId  ="";
  userpassword = "";
  role = "";
  //error : string = null;
  user : User = new User();
  officer : ElectionOfficer = new ElectionOfficer();
  voter : RegisteredSocietyVoters = new RegisteredSocietyVoters();
  admin : Admin = new Admin();
  candidate : RegisteredSocietyVoters = new RegisteredSocietyVoters();
  submitted = false;
  constructor(private userservice:UserserviceService, private router:Router,private electionofficerservice:ElectionofficerserviceService,
    private regsocietyservice:RegsocietyserviceService, private adminservice:AdminserviceService ) { }

  ngOnInit(): void {

  }

  public loginRole() {
    console.log(this.useremailId,this.userpassword,this.role);
    if(this.role==="User")
     this.userLogin();
    else if(this.role==="Officer")
      this.officerLogin();
    else if(this.role==="Voter")
     this.voterLogin("Voter");
    else if(this.role==="Admin")
      this.adminLogin();
    else if(this.role==="NominatedCandidates")
       this.voterLogin("NominatedCandidates");
  }

  private userLogin() {
    this.userservice.loginUser(this.useremailId,this.userpassword).subscribe(
      user =>{
        this.user=user;
        user.role="user"; 
        localStorage.setItem("user",JSON.stringify(user));
       // location.reload();
       window.location.href = '/';
        console.log(this.user);
      },
      error => console.log(error) 
        
    );
  }

  private officerLogin() {
    this.electionofficerservice.loginOfficer(this.useremailId,this.userpassword).subscribe(
      officer => {
        this.officer=officer;
        officer.role="officer";
        localStorage.setItem("user",JSON.stringify(officer));
        window.location.href = '/'; 
        console.log(this.officer);
      },
      error => console.log(error)
    );
  }

  private adminLogin() {
    this.adminservice.loginAdmin(this.useremailId,this.userpassword).subscribe(
      admin => {
        this.admin=admin;
        admin.role="admin";
        localStorage.setItem("user",JSON.stringify(admin));
        window.location.href = '/'; 
        console.log(this.admin);
      },
      error => console.log(error)
    );
  }

  private voterLogin(role) {
    this.regsocietyservice.loginVoter(this.useremailId,this.userpassword).subscribe(
      voter => {
        this.voter= voter;
        voter.role="voter";
        localStorage.setItem("user",JSON.stringify(voter));
        window.location.href = '/';  
        console.log(this.voter);
      },
      error => console.log(error)
    );
  }
  
  onSubmit() {
    this.submitted = true;
    
    this.loginRole();
    
  }


}
