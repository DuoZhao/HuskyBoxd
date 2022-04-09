import React from "react";
import {Link} from "react-router-dom";


const EditProfListItem = ({prof={
        "firstName": "Jiedong", "lastName": "Lang", "handle": "Code Elite",
        "profilePicture": "../../../../tuiter/martin.jpg",     "bannerPicture": "../../../../tuiter/interstellar.jpg",
        "bio": "Student, Data Scientist, Algorithm Engineer",
        "website": "youtube.com/webdevtv",
        "location": "Boston, MA",    "dateOfBirth": "3/1998",    "dateJoined": "12/2020",
    "films": 1638, "thisyear": 57, "lists": 12,   "followingCount": 666,    "followersCount": 0
}})=> {

    return (
        <div>
            <h1>Account Settings</h1>

            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Link to="/movie/profile" style={{"text-decoration":"none"}}>PROFILE</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/movie/profile" style={{"text-decoration":"none", "color":"green"}}>AVATAR</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/movie/profile" style={{"text-decoration":"none", "color":"green"}}>CONNECTIONS</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/movie/profile" style={{"text-decoration":"none", "color":"green"}}>NOTIFICATIONS</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/movie/profile" style={{"text-decoration":"none", "color":"green"}}>STORES & STREAMING</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/movie/profile" style={{"text-decoration":"none", "color":"green"}}>IMPORT & EXPORT</Link>
                    </div>
                </div>
            </div>

            <br/>

            <h3 style={{"padding-right":"50px"}}>Profile Settings</h3>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="container">
                                Name: <br/>
                                <input type="text" placeholder="Superman" style={{"width":"90%", "background-color":"grey"}}/>
                            <br/><br/>
                            <div className="row">
                                <div className="col-6">
                                    GivenName: <br/>
                                    <input type="text" style={{"background-color":"grey"}}/>
                                </div>
                                <div className="col-6">
                                    FamilyName: <br/>
                                    <input type="text" style={{"background-color":"grey"}}/>
                                </div>
                            </div>
                            <br/>
                            Email Address: <br/>
                            <input type="text" placeholder="superman@mail.com" style={{"width":"90%", "background-color":"grey"}}/>
                            <br/><br/>
                            <div className="row">
                                <div className="col-6">
                                    Location: <br/>
                                    <input type="text" style={{"background-color":"grey"}}/>
                                </div>
                                <div className="col-6">
                                    Website: <br/>
                                    <input type="text" style={{"background-color":"grey"}}/>
                                </div>
                            </div>
                            <br/>
                            Bio: <br/>
                            <input type="text" style={{"width":"90%", "height":"200px", "background-color":"grey"}}/>
                            <br/> <br/>
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" style={{"width":"200px", "background-color":"purple"}}>CHANGE PASSWORD</button>
                                </div>
                                <div className="col-6">
                                    <button type="button" style={{"width":"200px", "background-color":"green"}}>SAVE CHANGES</button>
                                </div>
                            </div>
                            <br/> <br/>
                        </div>

                    </div>


                    <div className="col-6">
                        <h3>Favourite Films</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-3" style={{"border-style":"solid", "border-color":"green", "height":"200px", "background-color":"grey"}}>
                                    <br/><br/><br/>
                                    <button type="button" style={{"background-color":"green", "border-radius":"50%"}}>+</button>
                                </div>
                                <div className="col-3" style={{"border-style":"solid", "border-color":"green", "height":"200px", "background-color":"grey"}}>
                                    <br/><br/><br/>
                                    <button type="button" style={{"background-color":"green", "border-radius":"50%"}}>+</button>
                                </div>
                                <div className="col-3" style={{"border-style":"solid", "border-color":"green", "height":"200px", "background-color":"grey"}}>
                                    <br/><br/><br/>
                                    <button type="button" style={{"background-color":"green", "border-radius":"50%"}}>+</button>
                                </div>
                                <div className="col-3" style={{"border-style":"solid", "border-color":"green", "height":"200px", "background-color":"grey"}}>
                                    <br/><br/><br/>
                                    <button type="button" style={{"background-color":"green", "border-radius":"50%"}}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>




        </div>


    );
}

export default EditProfListItem;
