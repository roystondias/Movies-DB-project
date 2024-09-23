//this JS file will contain all the things need for the filter component
import React from 'react'

function GenreFilter(props) {
    const onClickHandler = (event) => {
        //we use the below code to lift the state from GenreFilter component to App component
        props.data(event.target.value);
    }
    return (
        <div className="container">
            <strong>Filters</strong>
            <br />
            {/* adding the buttons for the genres and adding values accordingly because we have to compare value and the id in the content component*/}
            <button value="28" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Action</button>
            <button value="12" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Adventure</button>
            <button value="35" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Comedy</button>
            <button value="80" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Crime</button>
            <button value="99" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Documentary</button>
            <button value="18" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Drama</button>
            <button value="10751" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Family</button>
            <button value="14" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Fantascy</button>
            <button value="36" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">History</button>
            <button value="27" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Horror</button>
            <button value="10402" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Music</button>
            <button value="9648" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Mystery</button>
            <button value="10749" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Romance</button>
            <button value="878" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Scicence Fiction </button>
            <button value="53" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Thriller</button>
            <button value="10752" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">War</button>
            <button value="37" onClick={onClickHandler} type="button" className="btn btn-outline-primary btn-sm mx-1 my-1">Western</button>
        </div>
    )
}

export default GenreFilter