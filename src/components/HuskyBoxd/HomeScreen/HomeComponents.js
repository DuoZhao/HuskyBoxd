import React from "react";
import "../Styles/homepage.css"

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
                    <a href="#">
                        Get started — it‘s free!
                    </a>
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
                login
            }
        </>
    );
}
export default HomeComponents;