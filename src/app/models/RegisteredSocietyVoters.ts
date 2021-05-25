import { CooperativeSociety } from "./CooperativeSociety";

export class RegisteredSocietyVoters{
    constructor() {}

    id:number;
    voterIdCardNo:string;
    firstName:string;
    lastName:string;
    password:string;
    gender:string;
    reservationCategory:string;
    mobileno:string;
    emailId:string;
    address1:string;
    address2:string;
    mandal:string;
    district:string;
    pincode:string;
    society:CooperativeSociety =new CooperativeSociety();
    castedVote:boolean;
    
}