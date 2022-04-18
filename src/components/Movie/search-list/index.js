import {provider} from 'react-redux'
import React, {useEffect, useState} from "react";
import SearchItem from "../Search-Screen/search-item";
import {useDispatch, useSelector}
    from "react-redux";
import SearchReducer from "../reducers/search-reducer";
import {Link} from "react-router-dom";

const SearchList = () => {
    const SearchReducer
        = useSelector(state => state.SearchReducer);
    const dispatch = useDispatch();



    return (


            <div className="container">

                <div className="row">

                    <div className="col-8">
                        <h3 style={{"color":"grey"}}>FOUND 16 MATCHES FOR “LALA LAND”</h3>
                        <ul className="ttr-tuits list-group">
                            {

                                SearchReducer.map && SearchReducer.map(prof =>
                                    <>
                                        <SearchItem key={prof._id}
                                                    prof={prof}/>
                                    </>)
                            }
                        </ul>
                    </div>

                    <div className="col-4">
                        <br/><br/>
                        <text style={{"padding-left":"100px"}}>FILTER RESULTS FOR</text>
                        <div style={{"padding-left":"100px"}}>
                            <div className="list-group" style={{"background-color": "#1e2125", "width":"70%"}}>

                                <Link className="list-group-item"
                                      to="/movie/profile" style={{"background-color": "#1e2125", "color": "brown"}}>
                                    <div className="d-none d-xxl-inline d-xl-inline">All</div>
                                </Link >

                                <Link className="list-group-item"
                                      to="/movie/profile"  style={{"background-color": "#1e2125", "color": "white"}} onclick="SomeJavaScriptCode">
                                    <div className="d-none d-xxl-inline d-xl-inline">Films</div>
                                </Link >

                                <a className="list-group-item"
                                   href="#"  style={{"background-color": "#1e2125", "color": "white"}}>
                                    <div className="d-none d-xxl-inline d-xl-inline">Reviews</div>
                                </a >

                                <a className="list-group-item"
                                   href="#" style={{"background-color": "#1e2125", "color": "white"}}>
                                    <div className="d-none d-xxl-inline d-xl-inline">Stories</div>
                                </a >

                                <a className="list-group-item"
                                   href="#"  style={{"background-color": "#1e2125", "color": "white"}}>
                                    <span className="d-none d-xxl-inline d-xl-inline">Cast, Crew or Studios</span>
                                </a >

                                <a className="list-group-item"
                                   href="#"  style={{"background-color": "#1e2125", "color": "white"}}>
                                    <span className="d-none d-xxl-inline d-xl-inline">Podcast episodes</span>
                                </a >

                                <Link className="list-group-item"
                                      to="/movie/profile" style={{"background-color": "#1e2125", "color": "white"}}>
                                    <span className="d-none d-xxl-inline d-xl-inline">Journal articles</span>
                                </Link >

                                <a className="list-group-item"
                                   href="#" style={{"background-color": "#1e2125", "color": "white"}}>
                                    <span className="d-none d-xxl-inline d-xl-inline">Members or HQs</span>
                                </a >

                            </div>


                        </div>


                    </div>

                </div>

            </div>



    );
}

export default SearchList;