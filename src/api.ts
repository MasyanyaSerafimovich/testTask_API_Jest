import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getComments = async (postId: number) => {
  const response = await axios.get(`${BASE_URL}/${postId}/comments`);
  return response.data;
};

export const addComment = async (postId: number, name: string, email: string, body: string) => {
  const response = await axios.post(`${BASE_URL}/${postId}/comments`, {
    name,
    email,
    body
  });
  return response.data;
};
