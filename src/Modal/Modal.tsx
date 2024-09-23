import React from 'react'
import classes from './Modal.module.css'

function Modal(props) {
    return (
        <>
            <div className={classes.backdrop}></div>
            <div className={classes.modal}>
                <div className={classes.content}>
                    <img src={props.backdrop} alt="" />
                    <h3><strong>{props.data.title}</strong></h3><br />
                    {props.data.genres.map((data) => {
                        return <div className={classes.genres}>{data.name}</div>
                    }
                    )} <br /> <br />
                </div>
                <div className={classes.division}>
                    <strong>Overview:</strong> {props.data.overview} <br /> <br />
                    <strong>Release Date:</strong> {props.data.date} <br />
                    <strong>Ratings:</strong> {props.data.ratings}/10
                </div>
                <footer className={classes.actions}>
                    <button onClick={props.onClose}>close</button>
                </footer>
            </div>
        </>
    )
}

export default Modal