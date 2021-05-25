import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  role:string=null;
  ngOnInit(): void {
    let user = localStorage.getItem("user");
    this.role = JSON.parse(user).role;
    console.log(JSON.parse(user).role);
  }
  title = 'onlinevotingsystemapp';
  logout() {
    localStorage.removeItem("user");
    window.location.href = '/';
    this.role=null;
  }
}
