import './App.css';
import './vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap-5.1.3-dist/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/fontawesome.css';
import './vendors/fontawesome-free-5.15.4-web/css/fontawesome.min.css';
import './vendors/fontawesome-free-6.1.0-web/css/all.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Movie from "./components/HuskyBoxd";

import HuskyBoxd from "./components/HuskyBoxd";
import HomeScreen from "./components/HuskyBoxd/HomeScreen";
import ProfileScreen from "./components/HuskyBoxd/Profile/index";
import EditProfileScreen from "./components/HuskyBoxd/EditProfile/index";
import Stat from "./components/HuskyBoxd/Profile/stat.js";
import ProfileFilmsList from "./components/HuskyBoxd/Profile/films-list.js";
import Stores_Streaming from "./components/HuskyBoxd/EditProfile/stores_streaming.js";
import Import_Export from "./components/HuskyBoxd/EditProfile/import_export.js";
import SearchScreen from "./components/HuskyBoxd/Search-Screen/index";
import LoginScreen from "./components/HuskyBoxd/LoginScreen/LoginScreen";
import MovieDetailScreen from "./components/HuskyBoxd/MovieDetailScreen/MovieDetailScreen";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/huskyboxd" element={<Movie/>}>
                    <Route path="profile" element={<ProfileScreen/>}/>
                    <Route path="login" element={<LoginScreen/>}/>
                    <Route path="detail" element={<MovieDetailScreen/>}/>
                    <Route path="editprofile" element={<EditProfileScreen/>}/>
                    <Route path="profile-films" element={<ProfileFilmsList/>}/>
                    <Route path="stores_streaming" element={<Stores_Streaming/>}/>
                    <Route path="import_export" element={<Import_Export/>}/>
                    <Route path="stat" element={<Stat/>}/>
                    <Route path="search" element={<SearchScreen/>}/>
                    <Route path="home" element={<HomeScreen/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
