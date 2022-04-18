import {Outlet} from "react-router-dom";
import profileReducer from "./reducers/profile-reducer";
import SearchReducer from "./reducers/search-reducer";
import StatReducer from "./reducers/stat-reducer";
import FilmsReducer from "./reducers/films-reducer";
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";

const reducers = combineReducers({SearchReducer, profileReducer, StatReducer, FilmsReducer})
const store = createStore(reducers);

const Movie = () => {
    console.log("hello");
    return (
        <Provider store={store}>
            <Outlet/>
        </Provider>
    );
};
export default Movie;