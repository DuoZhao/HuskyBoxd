import {CREATE_USER, FIND_USER_BY_CREDENTIAL} from "../actions/login-actions";

const loginReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_USER_BY_CREDENTIAL:
            return action.status === "OK"
        default:
            return false;
    }
};

export default loginReducer;