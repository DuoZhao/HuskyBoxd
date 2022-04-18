import logo from './logo.svg';
import './App.css';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './vendors/bootstrap/js/bootstrap.bundle.min.js'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HuskyBoxd from "./components";
function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/"
                           element={<HuskyBoxd/>}/>
                </Routes>
        </BrowserRouter>
    );
}




export default App;
