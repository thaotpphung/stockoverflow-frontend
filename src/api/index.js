import axios from 'axios';

const url = 'http://localhost:9000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost); // get a newPost as a variable and post the postdata through api to the backend api url to the database  
// -> now go to action to write the code to actually send api request
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
