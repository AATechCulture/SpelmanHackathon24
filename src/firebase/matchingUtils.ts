import {Mentor, Mentee} from "./interfaces"


export const matchMentorsAndMentees = (mentors: Mentor[], mentees: Mentee[]): { mentor: Mentor; mentee: Mentee }[] => {
    const matches: { mentor: Mentor; mentee: Mentee }[] = [];
  
    mentors.forEach((mentor) => {
      mentees.forEach((mentee) => {
        // Consider multiple matching criteria:
        if (
          // Shared interests:
          mentor.expertise.some((skill) => mentee.interest.includes(skill)) ||
          // Location match (optional):
          mentor.city === mentee.City ||
          // Gender match (optional):
          mentor.gender === mentee.Gender
          // School match (optional)
        ){
          matches.push({ mentor, mentee });
        }
      });
    });
  
    return matches;
  };