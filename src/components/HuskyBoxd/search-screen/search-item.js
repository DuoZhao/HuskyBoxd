import React from "react";
import {Link} from "react-router-dom";

const SearchItem = ({movie})=> {
    console.log(movie)
    return (
        <div>

            <div className="container" style={{"border-style":"solid", "border-width":"thin","border-color":"white", "border-left":"none", "border-right":"none", "border-bottom":"none"}}>
                <div className="row">
                    <div className="col-2">
                        <Link to={`/details/${movie.imdbID}`}>
                            < img src={movie.Poster}  height="150px" width="100%" alt={''}/>
                        </Link>
                    </div>
                    <div className="col-10">
                        <text style={{"padding-right":"20px"}}><strong>{movie.Title}</strong></text>
                        <text style={{"padding-right":"20px"}}><strong>{movie.Year}</strong></text>
                        <br/>
                        <text>Alternative titles: {movie.Plot}</text>
                        <br/> <br/>
                        <text>Directed by: <strong>{movie.Director}</strong> </text>
                    </div>
                </div>
            </div>

        </div>
        // <div className="list-group-item">
        //
        //     <div className="container" style={{"border-style":"solid", "border-width":"thin","border-color":"white", "border-left":"none", "border-right":"none", "border-bottom":"none"}}>
        //         <div className="row">
        //             <div className="col-2">
        //                 <Link to="/movie/profile">
        //                 <img src={prof.Poster}  height="150px" width="100%" alt={''}/>
        //                 </Link>
        //             </div>
        //             <div className="col-10">
        //                 <text style={{"padding-right":"20px"}}><strong>{prof.Ti}</strong></text>
        //                 <text style={{"padding-right":"20px"}}><strong>{prof.time}</strong></text>
        //                 <br/>
        //                 <text>Alternative titles: {prof.alternativetitle}</text>
        //                 <br/> <br/>
        //                 <text>Directed by: <strong>{prof.director}</strong> </text>
        //             </div>
        //         </div>
        //     </div>
        //
        // </div>


    );
}

export default SearchItem;
