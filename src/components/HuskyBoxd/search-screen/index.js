import React, {useEffect, useRef, useState} from "react";
import SearchList from '../search-list';
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
        const response = await axios.get(`${searchUrl}&s=${searchString}`)
        setMovies(response.data.Search)
        titleSearchRef.current.value = searchString
        navigate(`/huskyboxd/search/${searchString}`)
    }

    useEffect(() => {
        searchByTitle()
    }, [])


    return (
        <>
            <div>
                <Navigation login={true}/>
            </div>

        <div className="position-relative">
            {/*<h1>Omdb Search</h1>*/}
            {/*{profile.email}*/}
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        onClick={searchByTitle}
                        className="btn btn-primary float-end" color="red">Search</button>
                    <input
                        ref={titleSearchRef}
                        className="form-control w-75"/>
                </li>
                {
                    movies.map (movie =>
                        <SearchItem prof={movie}/>
                    )
                }
            </ul>
        </div>

        </>
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
