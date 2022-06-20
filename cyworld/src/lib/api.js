import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://cyworld-server.herokuapp.com',
});

export const getAllGuests = async () => {
  try {
    const result = await client.get(`/guest`);

    if (result.status === 200) {
        return result.data.data;
    } 
    
    return null;
  } catch (error) {
    return false;
  }
};

export const getAllLetters = async () => {
    try {
        const result = await client.get(`/letter`);

        if (result.status === 200) {
            return result.data.data;
        }

        return null;
    } catch (error) {
        return false;
    }
};

export const createGuest = async (body) => {
  try {
    const result = await client.post(
      `/guest`, 
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (result.status === 200) return result.data.data;
    return null;
  } catch (error) {
    return null;
  }
};

export const createLetter = async (body) => {
  try {
    const result = await client.post(
      `/letter`, 
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (result.status === 200) return result.data.data;
    return null;
  } catch (error) {
    return null;
  }
};