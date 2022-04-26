import React from "react";
import "../Styles/homepage.css"
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const HomeComponents = (
    {
        login = false
    }
) => {

    return (
        <>
            {
                !login && <div className="wd-content-site">
            <div className="wd-content">
                <div className="wd-title">
                    <h2>
                        Track films you’ve&nbsp;watched.
                        <br/>
                        Save those you want to&nbsp;see.
                        <br/>
                        Tell your friends what’s&nbsp;good.
                        &nbsp;
                    </h2>
                </div>
                <div className="button">
                    <Link to="/huskyboxd/login">
                        Get started — it‘s free!
                    </Link>
                </div>
                <div className="wd-note">
                    <p>
                        The social network for film&nbsp;lovers.&nbsp; Also available on <a href="#">
                        <i className="fab fa-apple"/>
                        <i className="fab fa-android"/></a>
                    </p>
                </div>
            </div>
        </div>
            }
            {
                login && <div className="wd-welcome-message">
                    <h2>Welcome back, <span>JoJo</span>. Here’s what we’ve been watching...</h2>
                </div>
            }
        </>
    );
}
export default HomeComponents;