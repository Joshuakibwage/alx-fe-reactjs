import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      let query = `https://api.github.com/search/users?q=${username}`;
      if (location) query += `+location:${location}`;
      if (repos) query += `+repos:>=${repos}`;

      const response = await axios.get(query);
      setUsers(response.data.items);
    } catch (err) {
      setError('Looks like we can’t find the user');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <form onSubmit={handleSearch} className="space-y-4 w-full max-w-md">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          placeholder="Minimum Repositories"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Search
        </button>
      </form>
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <div className="mt-6 w-full max-w-2xl">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white mb-4 rounded shadow flex items-center">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <p className="font-bold">{user.login}</p>
              <p>{user.location}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
["Looks like we cant find the user"]
["fetchUserData"]