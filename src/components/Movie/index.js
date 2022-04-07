import {Outlet} from "react-router-dom";
import profileReducer from "./reducers/profile-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";





const store = createStore(profileReducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
        <div>

            <div className="row mt-2">

                <Outlet/>

            </div>


        </div>
        </Provider>
    );
};
export default Tuiter;