import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/photos',
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
