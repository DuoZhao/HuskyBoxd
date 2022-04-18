import React from "react";
import {Link} from "react-router-dom";
import NavigationBar from "./navigation_bar";


const Import_Export = ()=> {

    return (
        <div>

            <NavigationBar/>

            <br/><br/><br/>

            <div className="container">
                <div className="row">
                    <div className="col-1">

                    </div>
                    <div className="col-7">
                        <text style={{"font-size":"30px", "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}>
                            Account Data
                        </text>

                        <br/><br/><br/>

                        <text style={{"font-size":"20px", "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}>
                            Import data to your account, or export your account in CSV format:
                        </text>

                        <br/><br/><br/>


                        <div>
                            <button type="button" style={{"width":"200px", "background-color":"grey", "font-size":"20px"}}>IMPORT YOUR DATA</button>
                        </div>

                        <br/><br/><br/>


                        <div>
                            <button type="button" style={{"width":"200px", "background-color":"grey", "font-size":"20px"}}>EXPORT YOUR DATA</button>
                        </div>


                    </div>
                </div>
            </div>



        </div>


    );
}

export default Import_Export;
