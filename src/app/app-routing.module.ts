import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CooperativesocietyDetailsComponent } from './cooperativesociety-details/cooperativesociety-details.component';
import { CooperativesocietyListComponent } from './cooperativesociety-list/cooperativesociety-list.component';
import { CreateCooperativesocietyComponent } from './create-cooperativesociety/create-cooperativesociety.component';
import { CreateRegsocietyvotersComponent } from './create-regsocietyvoters/create-regsocietyvoters.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ElectionresultDetailsComponent } from './electionresult-details/electionresult-details.component';
import { ElectionresultListComponent } from './electionresult-list/electionresult-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NominatedcandidatesDetailsComponent } from './nominatedcandidates-details/nominatedcandidates-details.component';
import { NominatedcandidatesListComponent } from './nominatedcandidates-list/nominatedcandidates-list.component';
import { RegsocietyvotersDetailsComponent } from './regsocietyvoters-details/regsocietyvoters-details.component';
import { RegsocietyvotersListComponent } from './regsocietyvoters-list/regsocietyvoters-list.component';
import { UpdateCooperativesocietyComponent } from './update-cooperativesociety/update-cooperativesociety.component';
import { UpdateNominatedcandidatesComponent } from './update-nominatedcandidates/update-nominatedcandidates.component';
import { UpdateRegsocietyvotersComponent } from './update-regsocietyvoters/update-regsocietyvoters.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { VotedlistDetailsComponent } from './votedlist-details/votedlist-details.component';
import { VotedlistListComponent } from './votedlist-list/votedlist-list.component';

const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'users',component:UserListComponent},
  {path:'add',component:CreateUserComponent},
  {path: 'update/:userId',component:UpdateUserComponent},
  {path:'details/:userId',component:UserDetailsComponent},

  
  {path:'societies',component :CooperativesocietyListComponent },
  {path: 'addsociety',component : CreateCooperativesocietyComponent},
  {path: 'updatesociety/:societyId', component : UpdateCooperativesocietyComponent},
  {path: 'societydetails/:societyId',component : CooperativesocietyDetailsComponent},

  
  {path : 'electionresults',component:ElectionresultListComponent},
  {path: 'resultdetails/:Id',component:ElectionresultDetailsComponent},

  
  {path : 'listofvotedlist',component: VotedlistListComponent},
  {path: 'votedlistdetails/:id',component : VotedlistDetailsComponent},

  
  {path:'voters',component:RegsocietyvotersListComponent},
  {path:'addvoter',component:CreateRegsocietyvotersComponent},
  {path:'updatevoter/:id',component:UpdateRegsocietyvotersComponent},
  {path:'voterdetails/:id',component:RegsocietyvotersDetailsComponent},

  {path: 'nominatedcandidates',component:NominatedcandidatesListComponent},
  {path: 'updatenominatedcandidate/:candidateId',component:UpdateNominatedcandidatesComponent},
  {path: 'nominatedcandidatedetails/:candidateId',component:NominatedcandidatesDetailsComponent},

  {path: 'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
