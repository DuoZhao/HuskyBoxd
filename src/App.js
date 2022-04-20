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
import ProfileScreen from "./components/HuskyBoxd/profile/index";
import EditProfileScreen from "./components/HuskyBoxd/editprofile/index";
import StatProfile from "./components/HuskyBoxd/profile/stat";
import SearchScreen from "./components/HuskyBoxd/search-screen/index";
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
                    <Route path="detail/:movieId" element={<MovieDetailScreen/>}/>
                    <Route path="editprofile" element={<EditProfileScreen/>}/>
                    <Route path="search" element={<SearchScreen/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
