import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const data = await searchGithub();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    const data = await searchGithubUser(search);
    if (data.message) {
      setError(data.message);
    } else {
      setUsers([data]);
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}

export default CandidateSearch;



//   return <h1>CandidateSearch</h1>;
// };

// export default CandidateSearch;
