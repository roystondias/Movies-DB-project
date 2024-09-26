import axios from 'axios';
import { useEffect, useState } from 'react';

type Props = {

}

function Content(props: Props) {
    const [data, setdata] = useState([]);
    const BASE_URL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTVjNjRmMjEyZjFlMmQ1MmJjNjU1YzMxZTRjOWMyMiIsIm5iZiI6MTcyNzM2Nzg0OS41NjQyODQsInN1YiI6IjYyYWQ2M2U1MjAyZTExMDM0MzA1Y2QzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2SBwMAqytvZEpSLyyQSq8nXV-K_LMuAYIxVmnhc4Wtw'
            }
        };

        axios.get(BASE_URL, options)
            .then(function (response) {
                setdata(response.data.results)
            })
            .catch((error) =>
                console.log(error)
            )
            .finally(() => { });
    }, [URL])

    return (
        <>
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
                                    <button id={output_data.id} type="button" className="btn btn-primary">
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