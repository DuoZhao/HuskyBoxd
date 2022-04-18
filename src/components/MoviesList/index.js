import React from "react";
import "./index.css"
import "../Styles/card.css"
import PosterComponents from "./PosterComponents";

const MoviesList = () => {
    return (
        <>
            {/*<div style={{borderBottom: "1px solid #456", display: "center"}}>*/}
            {/*    POPULAR REVIEWS THIS WEEK*/}
            {/*</div>*/}
            <div className="wd-films-list">
                <PosterComponents/>
            </div>
        </>
    );
}
export default MoviesList;