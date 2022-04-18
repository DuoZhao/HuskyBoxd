import React from "react";
import {Link} from "react-router-dom";

const Films = ({prof={
    "_id":"123",
    "firstName": "Zhengyan", "lastName": "Mr.", "profilePicture":"../pictures/peaky_blinder.jpg",
    "film1":"../pictures/matrix.jpg", "film2":"../pictures/NinjaTurtles.jpg", "film3":"../pictures/spiderman.png", "film4":"../pictures/spiderman2.jpg", "film5":"../pictures/idiots3.jpg", "film6":"../pictures/readyplayerone.jpg",
    "film7":"../pictures/matrix.jpg", "film8":"../pictures/NinjaTurtles.jpg", "film9":"../pictures/spiderman.png", "film10":"../pictures/spiderman2.jpg", "film11":"../pictures/idiots3.jpg", "film12":"../pictures/readyplayerone.jpg",

}})=> {

    return (
        <div>

            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <img src={prof.film1} style={{"width":"100%"}}/>
                    </div>
                    <div className="col-1">
                        <img src={prof.film2} style={{"width":"100%"}}/>
                    </div>
                    <div className="col-1">
                        <img src={prof.film3} style={{"width":"100%"}}/>
                    </div>
                    <div className="col-1">
                        <img src={prof.film4} style={{"width":"100%"}}/>
                    </div>
                    <div className="col-1">
                        <img src={prof.film5} style={{"width":"100%"}}/>
                    </div>
                    <div className="col-1">
                        <img src={prof.film6} style={{"width":"100%"}}/>
                    </div>
                    <div className="col-1">
                        <img src={prof.film7} style={{"width":"100%"}}/>
                    </div>
                    <div className="col-1">
                        <img src={prof.film8} style={{"width":"100%"}}/>
                    </div>
                    <div className="col-1">
                        <img src={prof.film9} style={{"width":"100%"}}/>
                    </div>
                    <div className="col-1">
                        <img src={prof.film10} style={{"width":"100%"}}/>
                    </div>
                    <div className="col-1">
                        <img src={prof.film11} style={{"width":"100%"}}/>
                    </div>
                    <div className="col-1">
                        <img src={prof.film12} style={{"width":"100%"}}/>
                    </div>
                </div>
            </div>




        </div>


    );
}

export default Films;
