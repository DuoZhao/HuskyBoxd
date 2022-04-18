import React from "react";
import "../Styles/card.css";
import p from "../../images/poster/batman.jpg"
const PosterComponents = () => {

    return (
        <>
            <div className="wd-film me-1">
                <a href="/"><img src ={p} className="wd-img" alt="movie name"/></a>
                <div className="wd-cover-img">
                    <i className="fas fa-eye"/> <p>123,123 </p>
                    <i className="fas fa-heart"/> <p>123,123 </p>
                </div>
            </div>

            <div className="wd-film me-1">
                <a href="/"><img src ={p} className="wd-img" alt="movie name"/></a>
                <div className="wd-cover-img">
                    <i className="fas fa-eye"/> <p>123,123 </p>
                    <i className="fas fa-heart"/> <p>123,123 </p>
                </div>
            </div>

            <div className="wd-film me-1">
                <a href="/"><img src ={p} className="wd-img" alt="movie name"/></a>
                <div className="wd-cover-img">
                    <i className="fas fa-eye"/> <p>123,123 </p>
                    <i className="fas fa-heart"/> <p>123,123 </p>
                </div>
            </div>

            <div className="wd-film me-1">
                <a href="/"><img src ={p} className="wd-img" alt="movie name"/></a>
                <div className="wd-cover-img">
                    <i className="fas fa-eye"/> <p>123,123 </p>
                    <i className="fas fa-heart"/> <p>123,123 </p>
                </div>
            </div>

            <div className="wd-film me-1">
                <a href="/"><img src ={p} className="wd-img" alt="movie name"/></a>
                <div className="wd-cover-img">
                    <i className="fas fa-eye"/> <p>123,123 </p>
                    <i className="fas fa-heart"/> <p>123,123 </p>
                </div>
            </div>

            <div className="wd-film me-1">
                <a href="/"><img src ={p} className="wd-img" alt="movie name"/></a>
                <div className="wd-cover-img">
                    <i className="fas fa-eye"/> <p>123,123 </p>
                    <i className="fas fa-heart"/> <p>123,123 </p>
                </div>
            </div>

        </>
    );
}
export default PosterComponents;