import { NominatedCandidates } from "./NominatedCandidates";

export class ElectionResult{
    constructor() {

    }

    id : number;
    pollingDate : Date;
    candidate : NominatedCandidates;
    coop_SocietyName : string;
    totalSocietyVotes : number;
    totalPolledVotes : number;
    totalPollingPercentage : number;
    totalCandidateVotes : number;
    candidateVotesPercentage : number;
    result : string;
        
}
