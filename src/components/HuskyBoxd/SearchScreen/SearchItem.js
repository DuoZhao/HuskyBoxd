import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {findMovieByID} from "../actions/movie-detail-action";
import {useDispatch, useSelector} from "react-redux";
import {findUserByID} from "../actions/user-actions";
import * as service from '../services/detail-services';

const SearchItem = ({movie}) => {

    // const titleSearchRef = useRef()
    // const {movieSearch} = useParams()
    const navigate = useNavigate()
    // const [movies, setMovies] = useState([])
    // const searchUrl = 'https://www.omdbapi.com/?apikey=852159f0'
    const toDetails = () => {
        // const searchString = titleSearchRef.current.value || movieSearch
        // const response = await axios.get(`${searchUrl}&s=${searchString}`)
        // setMovies(response.data.Search)
        // titleSearchRef.current.value = searchString
        // navigate(`/huskyboxd/search/${searchString}`)
        navigate("/huskyboxd/detail/" + movie.imdbID)
    }

    const dispatch = useDispatch()

    const Movie = findMovieByID(dispatch, movie.imdbID, false)


    console.log(movie)
    // console.log(Movie)
    const movieInfo = Movie[0]

    return (
        <div className="list-group-item">

            <div className="container" style={{
                "border-style": "solid",
                "border-width": "thin",
                "border-color": "white",
                "border-left": "none",
                "border-right": "none",
                "border-bottom": "none"
            }}>
                <div className="row">
                    <div className="col-2">
                        <button onClick={toDetails}>
                            <img src={movie.Poster} height="150px" width="100%" alt={''}/>
                        </button>
                    </div>
                    <div className="col-10">
                        <text style={{"padding-right": "20px", "font-size":"20px","font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}><strong>{movie.Title}</strong></text>
                        <br/> <br/>
                        <text style={{"padding-right": "20px", "font-size":"20px", "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}><strong>{movie.Year}</strong></text>
                        <br/> <br/>
                        <text style={{"font-family": "TiemposHeadlineWeb-Bold,Georgia,serif", "font-size":"20px"}}>Type: {movie.Type}</text>
                        {/*<text>Directed by: <strong>{movie.director}</strong></text>*/}
                    </div>
                </div>
            </div>

        </div>


    );
}

export default SearchItem;
