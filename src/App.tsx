import AppButton from './components/AppButton';
import { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import { generateEmbedding } from './ollama/ollama';

const App = () => {
  return <AppButton></AppButton>
}
export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MenteeLogin from './components/MenteeLogin';
import MentorLogin from './components/MentorLogin';
import CreateAccount from './components/CreateAccount';
import MenteeDash from './components/MenteeDash';
import MentorDash from './components/MentorDash';
import AcceptDecline from './components/AcceptDecline';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentee-login" element={<MenteeLogin />} />
        <Route path="/mentor-login" element={<MentorLogin />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/mentee-dash" element={<MenteeDash />} />
        <Route path="/mentor-dash" element={<MentorDash />} />
        <Route path="/accept-decline" element={<AcceptDecline />} />
      </Routes>
    </Router>
  );
};

interface Mentee {
  id: string;
  Fname: string;
  Lname: string;
  interest: string;
  embedding?: number[];
}

interface Mentor {
  id: string;
  first: string;
  last: string;
  expertise: string;
  embedding?: number[];
}

interface Match {
  mentor: Mentor;
  mentee: Mentee;
  score: number;
}

const MentorMatchingApp = () => {
  const [mentees, setMentees] = useState<Mentee[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cosineSimilarity = (embedding1: number[], embedding2: number[]): number => {
    try {
      const dotProduct = embedding1.reduce((acc, val, i) => acc + val * embedding2[i], 0);
      const magnitude1 = Math.sqrt(embedding1.reduce((acc, val) => acc + val * val, 0));
      const magnitude2 = Math.sqrt(embedding2.reduce((acc, val) => acc + val * val, 0));
      
      if (magnitude1 === 0 || magnitude2 === 0) return 0;
      return dotProduct / (magnitude1 * magnitude2);
    } catch (error) {
      console.error('Error calculating similarity:', error);
      return 0;
    }
  };

  const findMatches = (mentors: Mentor[], mentees: Mentee[]): Match[] => {
    const matches: Match[] = [];
    
    mentees.forEach(mentee => {
      const menteeEmbedding = mentee.embedding;
      if (!menteeEmbedding) return;
      
      mentors.forEach(mentor => {
        const mentorEmbedding = mentor.embedding;
        if (!mentorEmbedding) return;
        
        const score = cosineSimilarity(menteeEmbedding, mentorEmbedding);
        if (score > 0.7) {
          matches.push({ mentor, mentee, score });
        }
      });
    });

    return matches.sort((a, b) => b.score - a.score);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch and process mentees
      const menteeRefs = collection(db, "mentee");
      const menteeSnapshot = await getDocs(menteeRefs);
      const menteeData = await Promise.all(
        menteeSnapshot.docs.map(async (doc) => {
          const mentee = { ...doc.data() as Mentee, id: doc.id };
          try {
            // Assuming generateEmbedding returns number[] directly
            const embedding = await generateEmbedding(mentee.interest);
            if (Array.isArray(embedding)) {
              return { ...mentee, embedding };
            }
            return mentee;
          } catch (error) {
            console.error(`Error generating embedding for mentee ${mentee.id}:`, error);
            return mentee;
          }
        })
      );

      // Fetch and process mentors
      const mentorRefs = collection(db, "mentor");
      const mentorSnapshot = await getDocs(mentorRefs);
      const mentorData = await Promise.all(
        mentorSnapshot.docs.map(async (doc) => {
          const mentor = { ...doc.data() as Mentor, id: doc.id };
          try {
            // Assuming generateEmbedding returns number[] directly
            const embedding = await generateEmbedding(mentor.expertise);
            if (Array.isArray(embedding)) {
              return { ...mentor, embedding };
            }
            return mentor;
          } catch (error) {
            console.error(`Error generating embedding for mentor ${mentor.id}:`, error);
            return mentor;
          }
        })
      );

      setMentees(menteeData);
      setMentors(mentorData);
      
      // Only include items with valid embeddings in matching
      const validMentors = mentorData.filter((mentor): mentor is Mentor & { embedding: number[] } => 
        Array.isArray(mentor.embedding));
      const validMentees = menteeData.filter((mentee): mentee is Mentee & { embedding: number[] } => 
        Array.isArray(mentee.embedding));
        
      const newMatches = findMatches(validMentors, validMentees);
      setMatches(newMatches);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ... rest of the component remains the same ...

  return (
    <div className="p-4 space-y-6">
      {loading && (
      <div className="text-center">
        <p>Loading data...</p>
      </div>
    )}
    {error && (
      <div className="text-center text-red-500">
        <p>Error: {error}</p>
      </div>
    )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4 bg-white shadow">
          <h2 className="text-xl font-bold mb-4">Mentees ({mentees.length})</h2>
          {mentees.map((mentee) => (
            <div key={mentee.id} className="mb-2 p-2 border rounded">
              <div className="font-medium">
                {mentee.Fname} {mentee.Lname}
              </div>
              <div className="text-sm text-gray-600">
                Interests: {mentee.interest}
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-4 bg-white shadow">
          <h2 className="text-xl font-bold mb-4">Mentors ({mentors.length})</h2>
          {mentors.map((mentor) => (
            <div key={mentor.id} className="mb-2 p-2 border rounded">
              <div className="font-medium">
                {mentor.first} {mentor.last}
              </div>
              <div className="text-sm text-gray-600">
                Expertise: {mentor.expertise}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border rounded-lg p-4 bg-white shadow">
        <h2 className="text-xl font-bold mb-4">Matches ({matches.length})</h2>
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <div key={index} className="mb-2 p-2 border rounded">
              <div className="font-medium">
                Match Score: {(match.score * 100).toFixed(1)}%
              </div>
              <div>
                Mentor: {match.mentor.first} {match.mentor.last}
              </div>
              <div>
                Mentee: {match.mentee.Fname} {match.mentee.Lname}
              </div>
            </div>
          ))
        ) : (
          <div>No matches found.</div>
        )}
      </div>
    </div>
  );
};

export default MentorMatchingApp;

export default App;