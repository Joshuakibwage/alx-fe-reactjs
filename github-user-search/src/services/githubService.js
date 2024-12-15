import axios from 'axios';

export const fetchUserData = async (username, location = '', repos = '') => {
  try {
    let query = `https://api.github.com/search/users?q=${username}`;
    if (location) query += `+location:${location}`;
    if (repos) query += `+repos:>=${repos}`;

    const response = await axios.get(query);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
