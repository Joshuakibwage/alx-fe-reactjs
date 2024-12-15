import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError(["Looks like we can’t find the user"]);
    }
    setLoading(false);
  };

  return (
    <div className='w-1/2 h-full  mx-auto shadow-lg shadow-red-400 shadow-opacity-5 flex justify-center items-center flex-col
    bg-slate-300
    '>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className='my-4 rounded-md border-red-700 border-2'
          
        />
        <br />
        <button
        className='bg-gradient-to-r from-orange-400 to-red-800 px-6 py-1 rounded-lg text-white font-bold'
        type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p>{userData.name}</p>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;

["Looks like we cant find the user"]
