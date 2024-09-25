import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal } from '../modal';

function Content(props) {
    const [data, setdata] = useState([]);
    //adding const of the urlink to avoid code duplication
    const API_KEY = "?api_key=8a5c64f212f1e2d52bc655c31e4c9c22";
    const BASE_URL = "https://api.themoviedb.org/3";
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";
    const GENRE_LIST = props.genreData;
    let URL = BASE_URL + "/movie/popular" + API_KEY + "&language=en-US&page=1&with_genres=" + GENRE_LIST;
    const [modal, setmodal] = useState();

    // useEffect hook runs onces in which the GET request is made for the popular movies URL
    useEffect(() => {
        axios.request(URL).then(response => {
            setdata(response.data.results);
        });
    }, [URL])

    const onClickHandler = (event) => {
        let URL = `${BASE_URL}/movie/${event.target.id}${API_KEY}`;
        let response = fetch(URL);
        response.then((display_data) => display_data.json()).then(data => setmodal({
            date: data.release_date,
            title: data.original_title,
            overview: data.overview,
            ratings: data.vote_average,
            imagePath: data.poster_path,
            genres: data.genres,
        }));
    }
    const closeHandler = () => {
        setmodal();
    }
    return (
        <>
            {modal && <Modal backdrop={`${IMAGE_BASE_URL}${modal.imagePath}`} data={modal} title={modal.title} overview={modal.overview} onClose={closeHandler}></Modal>}
            <div className='container'>
                <div className="row my-2">
                    {data.map(output_data => {
                        return <div className="col-lg-3 col-md-4 col-sm-6" key={output_data.id}>
                            <div className="card my-3">
                                <img src={`${IMAGE_BASE_URL}${output_data.poster_path}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title my-2">{output_data.original_title}</h5>
                                    <p><strong>User Rating: <span style={{ color: "red" }}>{output_data.vote_average * 10}%</span></strong></p>
                                    <p className="card-text">{output_data.overview.slice(0, 150)}....</p>
                                    <button id={output_data.id} onClick={onClickHandler} type="button" className="btn btn-primary">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Content