import {Outlet} from "react-router-dom";
import profileReducer from "./reducers/profile-reducer";
import SearchReducer from "./reducers/search-reducer";
import movieReducer from "./reducers/movie-reducer";
import loginReducer from "./reducers/login-reducer";
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";

const reducers = combineReducers({SearchReducer, profileReducer, movie: movieReducer, login: loginReducer})
const store = createStore(reducers);

const Movie = () => {
    return (
        <Provider store={store}>
            <Outlet/>
        </Provider>
    );
};
export default Movie;