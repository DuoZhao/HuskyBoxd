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
                    <Link to="/movie/profile" style={{"color":"white", "background-color":"black", "text-decoration":"none"}}>FILMS</Link>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"color": "white", "padding-left":"10px", "padding-rightt":"10px", "border-style":"dotted", "border-color":"grey", "border-top":"none","border-left":"none", "border-bottom":"none"}}>
                    <strong style={{"color":"white"}}>{prof.thisyear}</strong>
                    <br/>
                    <Link to="/movie/profile" style={{"color":"white", "background-color":"black", "text-decoration":"none"}}>THIS YEAR</Link>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"color": "white", "padding-left":"10px", "padding-rightt":"10px", "border-style":"dotted", "border-color":"grey", "border-top":"none","border-left":"none", "border-bottom":"none"}}>
                    <strong style={{"color":"white"}}>{prof.lists}</strong>
                    <br/>
                    <Link to="/movie/profile" style={{"color":"white", "background-color":"black", "text-decoration":"none"}}>LISTS</Link>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"color": "white", "padding-left":"10px", "padding-rightt":"10px", "border-style":"dotted", "border-color":"grey", "border-top":"none","border-left":"none", "border-bottom":"none"}}>
                    <strong style={{"color":"white"}}>{prof.followingCount}</strong>
                    <br/>
                    <Link to="/movie/profile" style={{"color":"white", "background-color":"black", "text-decoration":"none"}}>FOLLOWING</Link>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{"color": "white", "padding-left":"10px", "padding-rightt":"10px"}}>
                    <strong style={{"color":"white"}}>{prof.followersCount}</strong>
                    <br/>
                    <Link to="/movie/profile" style={{"color":"white", "background-color":"black", "text-decoration":"none"}}>FOLLOWERS</Link>
                    </div>


                </div>


            </div>


            <br/>

            <div className="container" style={{"border-style":"solid", "border-color":"grey"}}>
                <div className="row">
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/movie/profile" style={{"color":"white", "text-decoration":"none"}}><strong>Profile</strong></Link>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/movie/profile" style={{"color":"white", "text-decoration":"none"}}><strong>Films</strong></Link>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/movie/profile" style={{"color":"white", "text-decoration":"none"}}><strong>Likes</strong></Link>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/movie/profile" style={{"color":"white", "text-decoration":"none"}}><strong>Tags</strong></Link>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/movie/profile" style={{"color":"white", "text-decoration":"none"}}><strong>Stats</strong></Link>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/movie/profile" style={{"color":"white", "text-decoration":"none"}}><strong>Network</strong></Link>
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
                        <Link to="/movie/profile">
                            <img src="../pictures/incredibles.jpg" height="350px" width="250px" style={{"padding-top":"15px"}}/>
                        </Link>
                        </div>
                    <div className="col-3" >
                        <Link to="/movie/profile">
                        <img src="../pictures/zootopia.webp" height="350px" width="250px" style={{"padding-top":"15px"}} />
                        </Link>
                    </div>
                    <div className="col-3" >
                        <Link to="/movie/profile">
                        <img src="../pictures/coco.webp" height="350px" width="250px" style={{"padding-top":"15px"}} />
                        </Link>
                    </div>
                    <div className="col-3" >
                        <Link to="/movie/profile">
                        <img src="../pictures/Your_name_poster.jpg" height="350px" width="250px" style={{"padding-top":"15px"}} />
                        </Link>
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
                        <Link  to="/movie/profile">
                        <img src="../pictures/readyplayerone.jpg" height="350px" width="250px" style={{"padding-top":"15px"}} />
                        </Link>
                    </div>
                    <div className="col-3" >
                        <Link  to="/movie/profile">
                        <img src="../pictures/Transformers5.jpg" height="350px" width="250px" style={{"padding-top":"15px"}} />
                        </Link>
                    </div>
                    <div className="col-3" >
                        <Link  to="/movie/profile">
                        <img src="../pictures/interstellar.jpg" height="350px" width="250px" style={{"padding-top":"15px"}} />
                        </Link>
                    </div>
                    <div className="col-3" >
                        <Link  to="/movie/profile">
                        <img src="../pictures/bighero6.jpeg" height="350px" width="250px" style={{"padding-top":"15px"}} />
                        </Link>
                    </div>
                </div>


            </div>


            <br/> <br/> <br/>

        </div>


    );
}

export default ProfListItem;
