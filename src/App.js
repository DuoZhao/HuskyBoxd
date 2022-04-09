import './App.css';
import './vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap-5.1.3-dist/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/fontawesome.css';
import './vendors/fontawesome-free-5.15.4-web/css/fontawesome.min.css';
import './vendors/fontawesome-free-6.1.0-web/css/all.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Movie from "./components/Movie";
import ProfileScreen from "./components/Movie/profile/index";
import LoginScreen from "./components/Movie/LoginScreen/LoginScreen";
import MovieDetailScreen from "./components/Movie/MovieDetailScreen/MovieDetailScreen";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="movie" element={<Movie/>}/>
                        <Route path="profile" element={<ProfileScreen/>}/>
                        <Route path="login" element={<LoginScreen/>}/>
                        <Route path="detail" element={<MovieDetailScreen/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
    );
}




export default App;
