import axios from 'axios';

export const fetchUserData = async (username, location = '', repos = '', minRepos = '') => {
  try {
    let query = `https://api.github.com/search/users?q=${username}`;
    if (location) query += `+location:${location}`;
    if (repos) query += `+repos:>=${repos}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(query);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
