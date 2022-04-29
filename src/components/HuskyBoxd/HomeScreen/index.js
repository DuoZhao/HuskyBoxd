import React from "react";
import HomeComponents from "./HomeComponents";
import Navigation from "../Navigation";
import MoviesList from "../MoviesList";
import Comments from "../Comments";
import PopularList from "../PopularList";
import {useProfile} from "../contexts/profile-context";


const HomeScreen = ({
    login = true
                    }) => {
    const {profile} = useProfile();
    console.log("fjdlkfjlsdjfsd")
    console.log(profile.email);
    return (
        <>
        <div style={ {backgroundColor: "rgba(20,24,28,255)"}}>

            <div className="row">
                <Navigation login={login}/>
            </div>

            <div className="row mt-auto">
                <HomeComponents login={login}/>
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
        {/*// <div>*/}
        {/*//     <HomeComponents/>*/}
        {/*// </div>*/}
        </>
    );
}
export default HomeScreen;