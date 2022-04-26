import React from "react";
import "./index.css"
import "../Styles/card.css"
import PosterComponents from "./PosterComponents";
import CommentsComponents from "../Comments/CommentsComponents";

const MoviesList = () => {
    return (
        <div className="ms-4">
            <div style={{borderBottom: "1px solid #456"}}>
                POPULAR REVIEWS THIS WEEK
            </div>
            <div className="wd-films-list justify-content-center mt-2">
                <PosterComponents/>
            </div>

        </div>
    );
}
export default MoviesList;