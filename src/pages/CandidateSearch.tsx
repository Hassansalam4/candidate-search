import { useState, useEffect } from 'react';
import type { Candidate } from '../interfaces/Candidate.interface';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [currentUser, setCurrentUser] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    avatar_url: null,
    location: null,
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchForSpecificUser = async (username: string) => {
    const data: Candidate = await searchGithubUser(username);
    setCurrentUser(data);
  }

  const searchForAllUsers = async () => {
    const data: Candidate[] = await searchGithub();
    setResults(data);

    await searchForSpecificUser(data[currentIndex].login || '');

  }

  // make a desciion to save or reject a candidate
    // if selected is true, save the candidate
    // if selected is false, reject the candidate


  // useEffect to search for all users and search for a specific user
  
  return (
    <div>
      <h1>Candidate Search</h1>
      // Render the candidte card here
    </div>
  );
}

export default CandidateSearch;



//   return <h1>CandidateSearch</h1>;
// };

// export default CandidateSearch;
