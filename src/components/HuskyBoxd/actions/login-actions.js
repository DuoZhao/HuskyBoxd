import * as service from '../services/login-services';

export const CREATE_USER = 'CREATE_USER';
export const FIND_USER_BY_CREDENTIAL = 'FIND_USER_BY_CREDENTIAL';

export const createUser = async (dispatch, user) => {
    const newUser = await service.createUser(user);
    dispatch({
        type: CREATE_USER,
        newUser
    });
}

export const findUserByCredentials = async (dispatch, user) => {
    const status = await service.findUserByCredentials(user);
    dispatch({
        type: FIND_USER_BY_CREDENTIAL,
        status
    });
}
