import firebase from 'firebase/app';
import 'firebase/database'; // Import the desired Firebase services

import { db } from "./firebase/firebaseConfig";
import { getDocs, collection, DocumentData, addDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { Typography, Box } from "@mui/material";
import {getDatabase, ref, child, get, set} from "firebase/database";
import { Mentee, Mentor } from './firebase/interfaces';

const handleAddMentee = async (mentee: Mentee) => {
  const menteeRef = collection(db, "mentee"); // Assuming 'mentee' collection
  await addDoc(menteeRef, mentee);
  console.log('Mentee added successfully!');
};

const handleAddMentor = async (mentor: Mentor) => {
    const mentorRef = collection(db, 'mentor');
    await addDoc(mentorRef, mentor);
    console.log('Mentor added successfully!');
  };

export default function App() {
  const [mentees, setMentees] = useState<Mentee[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [matches, setMatches] = useState<{ mentor: Mentor; mentee: Mentee }[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const menteeRefs = collection(db, "mentee");
        const menteeSnapshot = await getDocs(menteeRefs);
        const menteeData = menteeSnapshot.docs.map((doc) => ({
          ...doc.data() as Mentee,
          id: doc.id,
        }));
        setMentees(menteeData);
  
        const mentorRefs = collection(db, "mentor");
        const mentorSnapshot = await getDocs(mentorRefs);
        const mentorData = mentorSnapshot.docs.map((doc) => ({
          ...doc.data() as Mentor,
          id: doc.id,
        }));
        setMentors(mentorData);
      };
  
      fetchData();
    }, []);

  return (
    <Box>
      {mentees.map((mentee) => (
        <Typography key={mentee.id} variant="h1">
          {mentee.Fname} - {mentee.Lname}
        </Typography>
      ))}

      {mentors.map((mentor) => (
        <Typography key={mentor.id} variant="h1">
          {mentor.first} - {mentor.expertise?.join(', ') || 'No Expertise'}
        </Typography>
      ))}

      <h2>Matches:</h2>
      {matches.length > 0 ? (
        matches.map((match, index) => (
          <Typography key={index} variant="h1">
            Mentor: {match.mentor.first} - Mentee: {match.mentee.Fname}
          </Typography>
        ))
      ) : (
        <Typography variant="h1">No matches found.</Typography>
      )}
    </Box>
  );
}