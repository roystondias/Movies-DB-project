import React, { useState, useEffect } from 'react'
//importing the axios library
import axios from 'axios'

function Content(props) {
    const [data, setdata] = useState([]);
    //adding const of the urlink to avoid code duplication
    const API_KEY = "?api_key=8a5c64f212f1e2d52bc655c31e4c9c22";
    const BASE_URL = "https://api.themoviedb.org/3";
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";
    const GENRE_LIST = props.genreData;
    let URL = BASE_URL + "/movie/popular" + API_KEY + "&language=en-US&page=1&with_genres=" + GENRE_LIST;

    // useEffect hook runs onces in which the GET request is made for the popular movies URL
    useEffect(() => {
        axios.request(URL).then(response => {
            console.log(response.data.results);
            console.log(URL);
            setdata(response.data.results);
        });
    }, [URL])

    console.log(props.genreData);
    return (
        <>
            <br />
            <div className='container'>
                <div className="row my-2">
                    {data.map(output_data => {
                        return <div className="col-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={`${IMAGE_BASE_URL}${output_data.poster_path}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title my-2">{output_data.original_title}</h5>
                                    <p className="card-text">{output_data.overview}</p>
                                    <a href={`https://www.themoviedb.org/movie/${output_data.id}`} className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className="container">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item"><a className="page-link" href="/">Next</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Content