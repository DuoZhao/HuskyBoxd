import axios from 'axios';

const MOVIE_API = 'http://localhost:4000/api/users/';
// const MOVIE_API = 'https://full-stack-developer-server-zd.herokuapp.com/api/tuits';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const MOVIE_API = `${API_BASE}/tuits`;

export const createUser = async (user) => {
    const response = await axios.post(MOVIE_API, user)
    return response.data;
}

export const findUserByCredentials = async (user) => {
    const response = await axios.post(MOVIE_API + "credentials", user);
    return response.data;
}

// export const updateTuit = async (tuit) => {
//     const response = await axios
//         .put(`${MOVIE_API}/${tuit._id}`, tuit);
//     return response.data;
// }

// export const deleteTuit = async (tuit) => {
//     const response = await axios
//         .delete(`${MOVIE_API}/${tuit._id}`);
//     return response.data;
// }


