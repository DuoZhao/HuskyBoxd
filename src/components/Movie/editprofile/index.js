import React from "react";
import EditProfileList from './profile';
import {Link} from "react-router-dom";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";


const EditProfileScreen = () => {
    return(
        <div>

            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="profile"/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <div style={{"position":"relative", "height":"50px"}}>
                        <Link to="/tuiter/profile" id="profile" style={{"background-color": "black", "color": "white",  "font-size":"20px" ,"position":"absolute"}}>
                            <i className="fa-solid fa-xmark"> </i>
                        </Link >
                        <text style={{"font-size":"20px", "color":"white", "padding-left":"30px"}}><strong> Edit profile</strong></text>
                        <span style={{"right":"20px", "position":"absolute"}}>
                    <button onClick="myFunction()" style={{"color":"black", "background-color":"white", "border-radius": "30%"}}>Save</button>
                </span>
                    </div>
                    <div>
                        <EditProfileList/>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>

        </div>
    );
};
export default EditProfileScreen;