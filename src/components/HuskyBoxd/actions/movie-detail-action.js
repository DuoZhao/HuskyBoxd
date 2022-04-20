import * as service from '../services/detail-services';

export const FIND_MOVIE_BY_ID = 'FIND_MOVIE_BY_ID';
export const FIND_MOVIE_IMG_BY_ID = 'FIND_MOVIE_IMG_BY_ID';

export const findMovieByID = async (dispatch, movieId, needImage) => {
    const movieInfo = await service.findMovieByID(movieId);
    if (needImage) {
        const movieImg = await service.findMovieImgByID(movieId);
        const imgListObject = JSON.parse(JSON.stringify(movieImg.items));
        movieInfo["image"] = imgListObject[0].image;
    }
    dispatch({
        type: FIND_MOVIE_BY_ID,
        movieInfo
    });
}

// export const findMovieImgByID = async (dispatch, movieId) => {
//     const movieImg = await service.findMovieImgByID(movieId);
//     dispatch({
//         type: FIND_MOVIE_IMG_BY_ID,
//         movieImg
//     });
// }

// export const CREATE_TUIT = 'CREATE_TUIT';
// export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
// export const UPDATE_TUIT = 'UPDATE_TUIT';
// export const DELETE_TUIT = 'DELETE_TUIT';
//
// export const createTuit = async (dispatch, tuit) => {
//     const newTuit = await service.createTuit(tuit);
//     dispatch({
//         type: CREATE_TUIT,
//         newTuit
//     });
// }
//
// export const findAllTuits = async (dispatch) => {
//     const tuits = await service.findAllTuits();
//     dispatch({
//         type: FIND_ALL_TUITS,
//         tuits
//     });
// }
// export const updateTuit = async (dispatch, tuit) => {
//     const status = await service.updateTuit(tuit);
//     dispatch({
//         type: UPDATE_TUIT,
//         tuit
//     });
// }
//
// export const deleteTuit = async (dispatch, tuit) => {
//     const response = await service.deleteTuit(tuit);
//     dispatch({
//         type: DELETE_TUIT,
//         tuit
//     })
// }
