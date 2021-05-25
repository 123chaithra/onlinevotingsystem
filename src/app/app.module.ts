import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CooperativesocietyListComponent } from './cooperativesociety-list/cooperativesociety-list.component';
import { CooperativesocietyDetailsComponent } from './cooperativesociety-details/cooperativesociety-details.component';
import { CreateCooperativesocietyComponent } from './create-cooperativesociety/create-cooperativesociety.component';
import { UpdateCooperativesocietyComponent } from './update-cooperativesociety/update-cooperativesociety.component';
import { ElectionresultListComponent } from './electionresult-list/electionresult-list.component';
import { ElectionresultDetailsComponent } from './electionresult-details/electionresult-details.component';
import { VotedlistListComponent } from './votedlist-list/votedlist-list.component';
import { VotedlistDetailsComponent } from './votedlist-details/votedlist-details.component';
import { RegsocietyvotersListComponent } from './regsocietyvoters-list/regsocietyvoters-list.component';
import { RegsocietyvotersDetailsComponent } from './regsocietyvoters-details/regsocietyvoters-details.component';
import { CreateRegsocietyvotersComponent } from './create-regsocietyvoters/create-regsocietyvoters.component';
import { UpdateRegsocietyvotersComponent } from './update-regsocietyvoters/update-regsocietyvoters.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateNominatedcandidatesComponent } from './update-nominatedcandidates/update-nominatedcandidates.component';
import { NominatedcandidatesListComponent } from './nominatedcandidates-list/nominatedcandidates-list.component';
import { NominatedcandidatesDetailsComponent } from './nominatedcandidates-details/nominatedcandidates-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,
    CooperativesocietyListComponent,
    CooperativesocietyDetailsComponent,
    CreateCooperativesocietyComponent,
    UpdateCooperativesocietyComponent,
    ElectionresultListComponent,
    ElectionresultDetailsComponent,
    VotedlistListComponent,
    VotedlistDetailsComponent,
    RegsocietyvotersListComponent,
    RegsocietyvotersDetailsComponent,
    CreateRegsocietyvotersComponent,
    UpdateRegsocietyvotersComponent,
    LoginComponent,
    HomepageComponent,
    UpdateNominatedcandidatesComponent,
    NominatedcandidatesListComponent,
    NominatedcandidatesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
