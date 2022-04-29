import "./index.css";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findMovieImgByID} from "../actions/movie-detail-action";
import movieStats from "./detailsIcon";

const MovieDetailComponent = ({movie}) => {
    // const {movieId} = useParams();
    // const movieImg = useSelector(state => state.movie);
    // const imgListObject = JSON.stringify(movieImg.items);
    // const imgList = JSON.parse(imgListObject);
    // console.log(imgListObject);
    // console.log(typeof imgListObject);
    // const dispatch = useDispatch();
    // useEffect(() => findMovieImgByID(dispatch, movieId), []);
    const backgroundImage = `url(${movie.image})`;
    // const backgroundImage = `url(${movieImg})`;
    return (
        <>
            <div className="wd-detail">
                {/*<div id="wd-detail-container" style={{background: `linear-gradient(to bottom, transparent 70%, black 100%), linear-gradient(90deg,#14181d 0,rgba(20,24,29,.986) .97%,rgba(20,24,29,.945) 2.07833333%,rgba(20,24,29,.883) 3.29666667%,rgba(20,24,29,.803) 4.60166667%,rgba(20,24,29,.711) 5.96666667%,rgba(20,24,29,.61) 7.365%,rgba(20,24,29,.504) 8.77166667%,rgba(20,24,29,.398) 10.16%,rgba(20,24,29,.296) 11.505%,rgba(20,24,29,.203) 12.78%,rgba(20,24,29,.122) 13.95833333%,rgba(20,24,29,.059) 15.01666667%,rgba(20,24,29,.016) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.016) 84.07166667%,rgba(20,24,29,.059) 84.98333333%,rgba(20,24,29,.122) 86.04166667%,rgba(20,24,29,.203) 87.22%,rgba(20,24,29,.296) 88.495%,rgba(20,24,29,.398) 89.84%,rgba(20,24,29,.504) 91.22833333%,rgba(20,24,29,.61) 92.635%,rgba(20,24,29,.711) 94.03333333%,rgba(20,24,29,.803) 95.39833333%,rgba(20,24,29,.883) 96.70333333%,rgba(20,24,29,.945) 97.92166667%,rgba(20,24,29,.986) 99.03%,#14181d), linear-gradient(to right, transparent 80%, black 100%), url(${backgroundImage})center center no-repeat `}}>*/}
                {/*<div id="wd-detail-container">*/}
                {/*    <img style={{width: "100%", height: "100%", background: `linear-gradient(to bottom, transparent 70%, black 100%), linear-gradient(90deg,#14181d 0,rgba(20,24,29,.986) .97%,rgba(20,24,29,.945) 2.07833333%,rgba(20,24,29,.883) 3.29666667%,rgba(20,24,29,.803) 4.60166667%,rgba(20,24,29,.711) 5.96666667%,rgba(20,24,29,.61) 7.365%,rgba(20,24,29,.504) 8.77166667%,rgba(20,24,29,.398) 10.16%,rgba(20,24,29,.296) 11.505%,rgba(20,24,29,.203) 12.78%,rgba(20,24,29,.122) 13.95833333%,rgba(20,24,29,.059) 15.01666667%,rgba(20,24,29,.016) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.016) 84.07166667%,rgba(20,24,29,.059) 84.98333333%,rgba(20,24,29,.122) 86.04166667%,rgba(20,24,29,.203) 87.22%,rgba(20,24,29,.296) 88.495%,rgba(20,24,29,.398) 89.84%,rgba(20,24,29,.504) 91.22833333%,rgba(20,24,29,.61) 92.635%,rgba(20,24,29,.711) 94.03333333%,rgba(20,24,29,.803) 95.39833333%,rgba(20,24,29,.883) 96.70333333%,rgba(20,24,29,.945) 97.92166667%,rgba(20,24,29,.986) 99.03%,#14181d), linear-gradient(to right, transparent 80%, black 100%), center center no-repeat `}} src={movie.image}/>*/}
                {/*<div id="wd-detail-container">*/}
                {/*</div>*/}
                {/*<div className="container wd-detail-part row">*/}
                {/*    <div className="col-4">*/}
                {/*        <img className="float-end" src={movie.Poster}/>*/}
                {/*    </div>*/}
                {/*    <div className="col-8">*/}
                {/*        <section>*/}
                {/*            <h1>{movie.Title}</h1>*/}
                {/*            <h4 className="ms-3">{movie.Year}</h4>*/}
                {/*            <text className="ms-3">Directed by {movie.Director}</text>*/}
                {/*            <p>{movie.Plot}</p>*/}
                {/*        </section>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="wd-movie-background">
                    {/*<div className="pos-relative-nudge-down-right">*/}
                    {/*    Portrait*/}
                    {/*</div>*/}
                    <div id="wd-detail-container" style={{background: `linear-gradient(to right, transparent 90%,   black 100%), linear-gradient(to left, transparent 90%,  black 100%), linear-gradient(to bottom, transparent, black), linear-gradient(to right bottom, transparent 90%, black), linear-gradient(to left bottom, transparent 90%, black), ${backgroundImage} center center no-repeat `}}>
                    </div>
                </div>
                <div className="wd-movie-detail justify-content-center">
                    <div className="container row m-auto">
                        <div className="col-4">
                            <img className="float-end" src={movie.Poster}/>
                        </div>
                        <div className="col-7">
                            <section>
                                <h1>{movie.Title}</h1>
                                <h4 className="ms-3">{movie.Year}</h4>
                                <text className="ms-3">Directed by {movie.Director}</text>
                                <p>{movie.Plot}</p>
                                <div className="d-flex justify-content-start">
                                    <div className="flex-column">
                                        <button className="far fa-eye" style={{color : "rgb(0, 224, 84)"}}/>
                                    </div>
                                    <div className="flex-column ms-2">
                                        <button className="far fa-heart" style={{color : "rgb(255, 128, 0)"}}/>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}
export default MovieDetailComponent;