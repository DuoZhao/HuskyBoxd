import axios from 'axios';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;
const OMDB_BASE = "http://www.omdbapi.com/?plot=full&apikey=436c0bf1&i=";
const IMDB_BASE = "https://imdb-api.com/en/API/Images/k_24vn94nx/";

export const findMovieByID = async (movieID) => {
    const response = await axios.get(OMDB_BASE + movieID);
    return response.data;
}

export const findMovieImgByID = async (movieID) => {
    const response = await axios.get(IMDB_BASE + movieID);
    return response.data;
}

// export const createTuit = async (tuit) => {
//     const response = await axios.post(TUITS_API, tuit)
//     return response.data;
// }

// export const deleteTuit = async (tuit) => {
//     const response = await axios
//         .delete(`${TUITS_API}/${tuit._id}`);
//     return response.data;
// }
//
// export const updateTuit = async (tuit) => {
//     const response = await axios
//         .put(`${TUITS_API}/${tuit._id}`, tuit);
//     return response.data;
// }
