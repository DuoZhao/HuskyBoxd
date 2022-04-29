import React, {useEffect, useRef, useState} from "react";
import SearchItem from './search-item'
import Navigation from "../Navigation";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";





const SearchScreen = () => {

    const titleSearchRef = useRef()
    const {movieSearch} = useParams()
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=852159f0'

    const searchByTitle = async () => {
        const searchString = titleSearchRef.current.value || movieSearch
        if (!searchString) {
            navigate(`/huskyboxd/search/`);
            return;
        }
        const response = await axios.get(`${searchUrl}&s=${searchString}`)
        setMovies(response.data.Search)
        titleSearchRef.current.value = searchString

    }
    useEffect(() => {
        searchByTitle()
    }, [])

    const toShow = movieSearch === "undefined";
    return (
        <div style={{backgroundColor: "rgba(20,24,28,255)"}}>

            <div>
                <Navigation login={true}/>
            </div>

        <div className="position-relative container">
            {/*<h1>Omdb Search</h1>*/}
            {/*{profile.email}*/}
            <ul className="list-group">

                <li className="list-group-item">
                    <button
                        onClick={searchByTitle}
                        className="btn btn-primary float-end" style={{"background-color":"#00B020"}}>Search</button>
                    <input
                        ref={titleSearchRef}
                        className="form-control w-75"/>
                </li>
                    <div className="row" style={{height: "100px"}}>
                        <div className="col-8">
                            {/*{*/}
                            {/*    movies ? '' : <h5>Type your movie</h5>*/}
                            {/*}*/}
                            {!movies && <h5>No result</h5>}
                            {
                                movies && !toShow && movies.map(movie =>
                                    <SearchItem movie={movie}/>
                                )
                            }
                    </div>




                <div className="col-4">
                    <div className="card" >
                        <img src="https://a.ltrbxd.com/resized/story/image/4/2/9/2/2/8/5/shard/7364/blob-960-960-0-0-fill.jpg?k=520da69929" height="220px"/>
                        <div className="container">
                            <h5><b>Review "Fathers"</b></h5>
                            <p>One of the the most reassuring elements on display at the 2022 Sloan Film Summit—which took place earlier this month, April 8-10, in LA’s Little Tokyo neighborhood—was that of the event’s omnipresent COVID-19 safety procedures. Regular testing for all staff and attendees! Indoor mask requirements! Limited indoor event seating!</p>
                        </div>
                    </div>
                    <div style={{"border-style":"solid","border-top":"none", "border-bottom":"none", "border-left":"none", "border-right":"none", "height":"20px"}} >
                    </div>
                    <div className="card" >
                        <img src="https://a.ltrbxd.com/resized/story/image/4/6/7/2/3/9/9/shard/7350/blob-960-960-0-0-fill.jpg?k=c3c78163a2" height="200px"/>
                        <div className="container">
                            <h5><b>From Script to Screen: The Strange Alchemy of ‘Bad Lieutenant</b></h5>
                            <p>The word “iguana” doesn’t appear in the shooting script of Bad Lieutenant: Port of Call New Orleans. And why should it? Written by veteran TV writer William Finkelstein, the script unfolds with the cause-and-effect logic of a tight police procedural. Prior to penning Bad Lieutenant, Finkelstein wrote more than 50 episodes of L.A. Law, created and wrote on Brooklyn South, and contributed to such cop show staples as Law & Order and NYPD Blue. The man knows how to write a coherent crime drama. </p>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="https://a.ltrbxd.com/resized/story/image/4/4/0/2/1/5/7/shard/7380/blob-960-960-0-0-fill.jpg?k=a89d8665f3" height="200px"/>
                        <div className="container">
                            <h5><b>My First Movie: Underdog Tale ‘The Fall’ Takes Its Crowdfunding Lumps and Bounces Back</b></h5>
                            <p>In this series of special guest posts, we’re asking first-time feature directors (narrative and nonfiction) to share what they’ve learned from these debut outings, focusing on one specific aspect of production. This month: crowdfunding. </p>
                        </div>
                    </div>


                </div>

                        </div>

            </ul>

                    </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    );

    // return(
    //     <div>
    //         {/*<div>*/}
    //         {/*    <Navigation login={true}/>*/}
    //         {/*</div>*/}
    //
    //         <div className="wd-search">
    //             <form id="searchForm">
    //                 <input ref={titleSearchRef} type="text" name = "query"/>
    //                 <button className="fas fa-search" onClick={searchByTitle}/>
    //                 {/*<i className="fas fa-search"/>*/}
    //             </form>
    //         </div>
    //         <>
    //             {
    //                 movies.map(movie =>
    //                     <li className="list-group-item">
    //                         <Link to={`/details/${movie.imdbID}`}>
    //                             <img src={movie.Poster} className="me-2" height={30}/>
    //                             {movie.Title}
    //                         </Link>
    //                     </li>
    //                 )
    //             }
    //         </>
    //
    //         {/*<div className="position-relative">*/}
    //         {/*    <SearchList movies = {movies}/>*/}
    //         {/*</div>*/}
    //
    //
    //     </div>
    //
    // );
};
export default SearchScreen;