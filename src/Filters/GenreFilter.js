import React from 'react'
import '../Filters/GenreFilter.css'

function GenreFilter() {
    return (
        <div className="container">
            <strong>Filters</strong>
            <br />
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Action</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Adventure</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Comedy</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Crime</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Documentary</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Drama</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Family</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Fantascy</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">History</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Horror</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Music</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Mystery</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Romance</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Scicence Fiction </button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Thriller</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">War</button>
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Western</button>
        </div>
    )
}

export default GenreFilter