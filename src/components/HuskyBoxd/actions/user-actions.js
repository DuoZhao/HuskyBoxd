import * as service from '../services/profile-services';

export const FIND_USER_BY_ID = 'FIND_USER_BY_ID';
export const FIND_USER_IMG_BY_ID = 'FIND_USER_IMG_BY_ID';

export const findUserByID = async (dispatch, userId, needImage) => {
    const userInfo = await service.findUserByID(userId);

    dispatch({
        type: FIND_USER_BY_ID,
        userInfo
    });
}
//
// export const findAllTuits = async (dispatch) => {
//     const tuits = await service.findAllTuits();
//     dispatch({
//         type: FIND_ALL_TUITS,
//         tuits
//     });
// }
//
// export const updateTuit = async (dispatch, tuit) => {
//     const status = await service.updateTuit(tuit);
//     dispatch({
//         type: UPDATE_TUIT,
//         tuit
//     });
// }
//
//
// export const deleteTuit = async (dispatch, tuit) => {
//     const response = await service.deleteTuit(tuit);
//     dispatch({
//         type: DELETE_TUIT,
//         tuit
//     })
// }
//

