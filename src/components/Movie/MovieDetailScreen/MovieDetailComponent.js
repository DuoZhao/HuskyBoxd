import "./index.css";

const MovieDetailComponent = () => {
    return (
        <>
            <div>
                <div id="wd-detail-container">
                </div>
                <div className="container row ms-5">
                    <div className="col-4">
                        <img src="./pictures/Dune.jpeg"/>
                    </div>
                    <div className="col-8">
                        <section>
                            <h1>Dune</h1>
                            <h4 className="ms-3">2021</h4>
                            <text className="ms-3">Directed by Denis Villeneuve</text>
                        </section>
                        <section>
                            <p>
                                Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet’s exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity’s greatest potential-only those who can conquer their fear will survive.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MovieDetailComponent;