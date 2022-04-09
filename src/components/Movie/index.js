import {Outlet} from "react-router-dom";
import profileReducer from "./reducers/profile-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(profileReducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <Outlet/>
        </Provider>
    );
};
export default Tuiter;