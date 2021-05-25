import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VotedList } from '../models/Votedlist';
import { VotedlistserviceService } from '../votedlistservice.service';

@Component({
  selector: 'app-votedlist-list',
  templateUrl: './votedlist-list.component.html',
  styleUrls: ['./votedlist-list.component.css']
})
export class VotedlistListComponent implements OnInit {

  votedlists: Observable<VotedList[]>;

  constructor(private votedlistService: VotedlistserviceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadVotedList();
  }

  reloadVotedList()
  {
    this.votedlistService.getVotedList().subscribe(
      votedlists =>{
        this.votedlists= votedlists
      }
    );
  }
  
  VotedlistDetails(id:number){
    this.router.navigate(['votedlistdetails',id]);
  }


}
