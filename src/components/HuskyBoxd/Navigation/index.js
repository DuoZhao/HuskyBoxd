import React from "react";
import {Link} from "react-router-dom";
import "./index.css"
import "../Styles/navigation.css"
const Navigation = (
    {
        login = false
    }) => {
    return (
        <>
            {/*!login homepage 1 */}
            {
                !login &&  <div className="wd-container-wallpaper-header">
                    <div className="wd-container-wallpaper">
                        <div className="wd-wallpaper">

                        </div>
                        <div className="wd-effect-wallpaper">

                        </div>
                    </div>
                </div>
            }

            {/*Navigation menu*/}
            <header className="wd-container-nav">
                <div className="wd-effect-header">
                </div>
                <section>
                    <div className="row mb-0">
                        {/*import logo*/}
                        <Link to = "/" className="col-3 float-start">
                                <img src="../pictures/images/lb3.png" className="w-100"  alt="..."/>
                        </Link>

                        {/*navigation list*/}
                        <div className="col-9 float-end">
                            <nav className="wd-menu">
                                {
                                   !login && <ul className="wd-menu-ul">
                                        <li className="wd-menu-li">SIGN IN</li>
                                        <li className="wd-menu-li">CREATE ACCOUNT</li>
                                        <li className="wd-menu-li">FILMS</li>
                                        <li className="wd-menu-li">LISTS</li>
                                    </ul>
                                }
                                {
                                    login && <ul className="wd-menu-ul">
                                        <li className="wd-menu-li">Home</li>
                                        <li className="wd-menu-li">Profile</li>
                                        <li className="wd-menu-li">FILMS</li>
                                        <li className="wd-menu-li">LISTS</li>
                                    </ul>
                                }
                            </nav>
                            <div className="wd-search">
                                <input type="text"/>
                                <i className="fas fa-search"/>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            {/*login homepage 2*/}
            {
                login && <div className="wd-welcome-message">
                    <h2>Welcome back, <span>JoJo</span>. Here’s what we’ve been watching…...</h2>
                </div>
            }

        </>
    );
}
export default Navigation;