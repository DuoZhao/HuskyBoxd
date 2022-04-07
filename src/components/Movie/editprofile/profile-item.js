import React from "react";

const EditProfListItem = ({prof={
        "firstName": "Martin", "lastName": "Shi", "handle": "Code Elite",
        "profilePicture": "../../../../tuiter/martin.jpg",     "bannerPicture": "../../../../tuiter/interstellar.jpg",
        "bio": "Student, Data Scientist, Algorithm Engineer",
        "website": "youtube.com/webdevtv",
        "location": "Boston, MA",    "dateOfBirth": "3/1998",    "dateJoined": "12/2020",
        "followingCount": 312,    "followersCount": 180
}})=> {

    return (
        <div>
            <div style={{"height":"200px"}}>
                <img src={prof.bannerPicture}  height="300px" width="100%"/>
            </div>

            <div style={{"padding-top": "40px", "padding-left": "16px", "position":"relative"}}>
                <img src={prof.profilePicture} height="100px" width="100px" style={{"border-radius": "50%", "float": "left"}}/>
            </div>
            <div>
                <div>
                    <br/> <br/> <br/> <br/> <br/>
                    <div style={{"width": "100%", "border-color":"lightgray", "border-width": "thin", "border-style": "solid"}}>
                        <text style={{"color": "grey", "font-size": "15px", "padding-left":"10px"}}><strong>Name</strong></text>
                        <br/>
                        <text style={{"color": "white", "font-size": "15px", "padding-left":"10px"}}><strong>{prof.lastName}</strong></text>
                        <text style={{"color": "white", "font-size": "15px"}}>  </text>
                        <text style={{"color": "white", "font-size": "15px"}}><strong>{prof.firstName}</strong></text>

                    </div>
                 </div>
                <div>
                    <br/> <br/>
                    <div style={{"width": "100%", "border-color":"lightgray", "border-width": "thin", "border-style": "solid"}}>
                        <text style={{"color": "grey", "font-size": "15px", "padding-left":"10px"}}><strong>Bio</strong></text>
                        <br/>
                        <text style={{"color": "white", "font-size": "15px", "padding-left":"10px"}}><strong>{prof.bio}</strong></text>
                        <br/> <br/> <br/>
                    </div>
                </div>
            </div>


            <br/> <br/> <br/>


        </div>


    );
}

export default EditProfListItem;
