import { CooperativeSociety } from "./CooperativeSociety";
import { RegisteredSocietyVoters } from "./RegisteredSocietyVoters";

export class VotedList{
    constructor() {}

    id : number;
    pollingDateTime : Date;
    society : CooperativeSociety;
    voter : RegisteredSocietyVoters;

}