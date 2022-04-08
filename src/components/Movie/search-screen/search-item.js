import React from "react";
import {Link} from "react-router-dom";

const SearchItem = ({prof={
    "_id":"123",
    "filmname": "BatMan", "time": "2008", "alternativetitle": "黑暗骑士, Batman: The Dark Knight, 배트맨 다크 나이트, Batman, Le Chevalier Noir, 蝙蝠侠2：黑暗骑士, Темный рыцарь, 蝙蝠俠—黑夜之神",
    "filmpicture": "../pictures/batman.jpg",     "director": "Christopher Nolan"
}})=> {

    return (
        <div>

            <div className="container" style={{"border-style":"solid", "border-width":"thin","border-color":"white", "border-left":"none", "border-right":"none", "border-bottom":"none"}}>
                <div className="row">
                    <div className="col-2">
                        <img src={prof.filmpicture}  height="150px" width="100%"/>
                    </div>
                    <div className="col-10">
                        <text style={{"padding-right":"20px"}}><strong>{prof.filmname}</strong></text>
                        <text style={{"padding-right":"20px"}}><strong>{prof.time}</strong></text>
                        <br/>
                        <text>Alternative titles: {prof.alternativetitle}</text>
                        <br/> <br/>
                        <text>Directed by: <strong>{prof.director}</strong> </text>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default SearchItem;
