import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};



// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// import * as api from '../api/index.js';

// // action creators -> create an action
// // as soon as an action get dispatched (is useEffect() dispatch(getPost())) -> go to post reducer -> handle logic of fetching all posts
// export const getPosts = () => async (dispatch) => {  // redux thunk - asynchronous logic because fetch api
//   try {
//     const { data } = await api.fetchPosts();  // destructure the response object from the backend. always has data
//     // fetching data from api and send the data through action.payload -> in reducer just need to return action.payload
//     // payload is usually the data where we store posts
//     dispatch({ type: FETCH_ALL, payload: data });  // normally reutn action, but with redux thunk -> dispatch . an action has a type and a payload
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const createPost = (post) => async (dispatch) => { // dispatch is of redux thunk
//   try {
//     const { data } = await api.createPost(post); // actually make api request, receive post from parameter in api folder

//     dispatch({ type: CREATE, payload: data }); // dispatch the action in the interface that needs it
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     console.log(data);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id);

//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await await api.deletePost(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
