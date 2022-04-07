import React from "react";
import {Link} from "react-router-dom";

const ProfListItem = ({prof={
        "firstName": "Jiedong", "lastName": "Lang", "handle": "Code Elite",
        "profilePicture": "../pictures/coder.webp",     "bannerPicture": "../pictures/jojo.webp",
        "bio": "Student, Data Scientist, Algorithm Engineer",
        "website": "youtube.com/webdevtv",
        "location": "Boston, MA",    "dateOfBirth": "3/1998",    "dateJoined": "12/2020",
    "films": 1638, "thisyear": 57, "lists": 12,   "followingCount": 666,    "followersCount": 0
}})=> {

    return (
        <div>

            <div style={{"height":"50px"}}>
                <i className="fa-solid fa-arrow-left"> </i>
                <text style={{"color": "white", "font-size": "15px", "padding-left":"10px", "padding-right":"5px"}}><strong>{prof.lastName}</strong></text>
                <text style={{"color": "white", "font-size": "15px"}}><strong>{prof.firstName}</strong></text>
                <br/>
                <text style={{"color": "grey", "font-size": "15px", "padding-left":"25px"}}>Prime Member</text>
            </div>
            <div style={{"height":"300px"}}>
                <img src={prof.bannerPicture}  height="300px" width="100%"/>
            </div>

            <div style={{"padding-top": "40px", "padding-left": "16px", "position":"relative"}}>
                <img src={prof.profilePicture} height="100px" width="100px" style={{"border-radius": "50%", "float": "left"}}/>

                <div className="row mt-2" style={{"width":"50%"}}>

                    <div className="col-1 col-lg-1 col-xl-2" style={{"background-color": "#1e2125", "color": "white", "padding-left":"10px", "padding-rightt":"10px"}}>
                    <strong style={{"color":"white"}}>{prof.films}</strong>
                    <br/>
                    <text style={{"color":"white", "background-color":"black"}}>FLIMS</text>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"background-color": "#1e2125", "color": "white", "padding-left":"10px", "padding-rightt":"10px"}}>
                    <strong style={{"color":"white"}}>{prof.thisyear}</strong>
                    <br/>
                    <text style={{"color":"white", "background-color":"black"}}>THIS YEAR</text>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"background-color": "#1e2125", "color": "white", "padding-left":"10px", "padding-rightt":"10px"}}>
                    <strong style={{"color":"white"}}>{prof.lists}</strong>
                    <br/>
                    <text style={{"color":"white", "background-color":"black"}}>LISTS</text>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"background-color": "#1e2125", "color": "white", "padding-left":"10px", "padding-rightt":"10px"}}>
                    <strong style={{"color":"white"}}>{prof.followingCount}</strong>
                    <br/>
                    <text style={{"color":"white", "background-color":"black"}}>FOLLOWING</text>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"background-color": "#1e2125", "color": "white", "padding-left":"10px", "padding-rightt":"10px"}}>
                    <strong style={{"color":"white"}}>{prof.followersCount}</strong>
                    <br/>
                    <text style={{"color":"white", "background-color":"black"}}>FOLLOWERS</text>
                    </div>


                </div>


            </div>


            <br/> <br/> <br/>

            <div>
                <span style={{"padding-left": "10px", "padding-right": "60px"}}>
                    <text>Profile</text>
                </span>
                <span style={{"padding-left": "10px", "padding-right": "60px"}}>
                    <text>Films</text>
                </span>
                <span style={{"padding-left": "10px", "padding-right": "60px"}}>
                    <text>Likes</text>
                </span>
                <span style={{"padding-left": "10px", "padding-right": "60px"}}>
                    <text>Network</text>
                </span>
            </div>


        </div>


    );
}

export default ProfListItem;
