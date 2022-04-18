import React from "react"
import {Outlet} from "react-router-dom";
import Navigation from "./Navigation";
import HomeScreen from "./HomeScreen";
import MoviesList from "./MoviesList";
import Comments from "./Comments";
import PopularList from "./PopularList";

const HuskyBoxd = () => {
    return (
        <div style={ {backgroundColor: "rgba(20,24,28,255)"}}>

            <div className="row">
                <Navigation/>
            </div>

            <div className="row mt-auto">
                <HomeScreen/>
            </div>

            <div className="row mt-1">
                <MoviesList/>
            </div>
            <div className="row mt-auto">
                <div className="col-1"/>
                <div className="col-6">
                    <Comments/>
                </div>
                <div className="col-1"/>
                <div className="col-3">
                    <PopularList/>
                </div>
                <div className="col-1"/>

            </div>
            {/*<div className="row mt-auto">*/}
            {/*    <PopularList/>*/}
            {/*</div>*/}
        </div>
    )
}
export default HuskyBoxd;