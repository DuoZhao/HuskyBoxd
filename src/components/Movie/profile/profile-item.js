import React from "react";
import {Link} from "react-router-dom";

const ProfListItem = ({prof={
        "firstName": "Zhengyan", "lastName": "Mr.", "handle": "Code Elite",
        "profilePicture": "../pictures/peaky_blinder.jpg",     "bannerPicture": "../pictures/batman_banner.webp",
        "bio": "Student, Data Scientist, Algorithm Engineer",
        "website": "youtube.com/webdevtv",
        "location": "Boston, MA",    "dateOfBirth": "3/1998",    "dateJoined": "12/2020",
    "films": 1638, "thisyear": 57, "lists": 12,   "followingCount": 666,    "followersCount": 0
}})=> {

    return (
        <div>


            <div style={{"height":"400px"}}>
                <img src={prof.bannerPicture}  height="450px" width="100%"/>
            </div>

            <div style={{"padding-top": "20px", "padding-left": "100px", "position":"relative"}}>
                <img src={prof.profilePicture} height="100px" width="100px" style={{"border-radius": "50%", "float": "left"}}/>

                <span style={{"height":"50px", "padding-left": "40px"}}>
                    <text style={{"color": "white", "font-size": "15px"}}><strong>{prof.lastName}</strong></text>
                    <text style={{"color": "white", "font-size": "15px"}}><strong>{prof.firstName}</strong></text>
                    <br/>
                    <text style={{"color": "grey", "font-size": "15px", "padding-left": "30px"}}>Prime Member</text>
                </span>

                <div className="row" style={{"width":"90%", "padding-left":"450px"}}>

                    <div className="col-1 col-lg-1 col-xl-2" style={{"color": "white", "padding-left":"10px", "padding-rightt":"10px", "border-style":"dotted", "border-color":"grey", "border-top":"none","border-left":"none", "border-bottom":"none"}}>
                    <strong style={{"color":"white"}}>{prof.films}</strong>
                    <br/>
                    <text style={{"color":"white", "background-color":"black"}}>FILMS</text>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"color": "white", "padding-left":"10px", "padding-rightt":"10px", "border-style":"dotted", "border-color":"grey", "border-top":"none","border-left":"none", "border-bottom":"none"}}>
                    <strong style={{"color":"white"}}>{prof.thisyear}</strong>
                    <br/>
                    <text style={{"color":"white", "background-color":"black"}}>THIS YEAR</text>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"color": "white", "padding-left":"10px", "padding-rightt":"10px", "border-style":"dotted", "border-color":"grey", "border-top":"none","border-left":"none", "border-bottom":"none"}}>
                    <strong style={{"color":"white"}}>{prof.lists}</strong>
                    <br/>
                    <text style={{"color":"white", "background-color":"black"}}>LISTS</text>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"color": "white", "padding-left":"10px", "padding-rightt":"10px", "border-style":"dotted", "border-color":"grey", "border-top":"none","border-left":"none", "border-bottom":"none"}}>
                    <strong style={{"color":"white"}}>{prof.followingCount}</strong>
                    <br/>
                    <text style={{"color":"white", "background-color":"black"}}>FOLLOWING</text>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"color": "white", "padding-left":"10px", "padding-rightt":"10px"}}>
                    <strong style={{"color":"white"}}>{prof.followersCount}</strong>
                    <br/>
                    <text style={{"color":"white", "background-color":"black"}}>FOLLOWERS</text>
                    </div>


                </div>


            </div>


            <br/>

            <div className="container" style={{"border-style":"solid", "border-color":"grey"}}>
                <div className="row">
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <text style={{"color":"white"}}><strong>Profile</strong></text>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <text style={{"color":"white"}}><strong>Films</strong></text>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <text style={{"color":"white"}}><strong>Likes</strong></text>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <text style={{"color":"white"}}><strong>Tags</strong></text>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <text style={{"color":"white"}}><strong>Stats</strong></text>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <text style={{"color":"white"}}><strong>Network</strong></text>
                    </div>
                </div>
            </div>


            <br/>

            <div className="container">
                <div className="row">
                    <text>Favourite Movies</text>
                </div>
                <div className="row" style={{"width":"100%", "border-style":"solid", "border-width":"thin", "border-color":"white", "border-left":"none", "border-right":"none", "border-bottom":"none"}}>
                    <div className="col-3">
                        <img src="../pictures/incredibles.jpg" height="350px" width="250px" style={{"padding-top":"15px"}}/>
                    </div>
                    <div className="col-3" >
                        <img src="../pictures/zootopia.webp" height="350px" width="250px" style={{"padding-top":"15px"}} />
                    </div>
                    <div className="col-3" >
                        <img src="../pictures/coco.webp" height="350px" width="250px" style={{"padding-top":"15px"}} />
                    </div>
                    <div className="col-3" >
                        <img src="../pictures/Your_name_poster.jpg" height="350px" width="250px" style={{"padding-top":"15px"}} />
                    </div>
                </div>


            </div>

            <br/> <br/> <br/>

            <div className="container">
                <div className="row">
                    <text>Recent Activities</text>
                </div>
                <div className="row"  style={{"width":"100%", "border-style":"solid", "border-width":"thin", "border-color":"white", "border-left":"none", "border-right":"none", "border-bottom":"none"}}>
                    <div className="col-3">
                        <img src="../pictures/readyplayerone.jpg" height="350px" width="250px" style={{"padding-top":"15px"}} />
                    </div>
                    <div className="col-3" >
                        <img src="../pictures/Transformers5.jpg" height="350px" width="250px" style={{"padding-top":"15px"}} />
                    </div>
                    <div className="col-3" >
                        <img src="../pictures/interstellar.jpg" height="350px" width="250px" style={{"padding-top":"15px"}} />
                    </div>
                    <div className="col-3" >
                        <img src="../pictures/bighero6.jpeg" height="350px" width="250px" style={{"padding-top":"15px"}} />
                    </div>
                </div>


            </div>


            <br/> <br/> <br/>

        </div>


    );
}

export default ProfListItem;
