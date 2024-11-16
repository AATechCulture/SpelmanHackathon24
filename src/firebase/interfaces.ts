export interface Mentee{
    id: string;
    Fname: string;
    Lname: string;
    City: string;
    Gender: string;
    interest: string[];
    School: string;
    State: string;

}

export interface Mentor{
    id: string;
    first: string;
    last: string;
    city: string;
    gender: string;
    interest1: string;
    interest2: string;
    interest3: string;
    job: string;
    state: string;
    expertise: string[];
}