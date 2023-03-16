import { useState } from 'react';
import CloseButton from '../UI/CloseButton';
import Modal from '../UI/Modal';
import classes from './css/MovieShopping.module.css';
import SeatsForm from './SeatsForm';

const MovieShopping = props => {
    const movie = props.movie;
    const [page, setPage] = useState('seats');

    const closeModalHandler = () => {
        props.onCloseModal();
    }

    return (
        <Modal>
            <div className={classes.header}>
                <CloseButton onClick={closeModalHandler}/>
            </div>
            <div className={classes.grid}>
                <div className={classes['left-div']}>
                    <img src={movie.image} className={classes.poster}/>
                    <h2>{movie.name} <small>{`(${movie.year})`}</small></h2>
                    <h4>{movie.time}</h4>
                    <h3>Horário: {movie.hour}</h3>
                    <h3>{props.available}</h3>
                </div>
                <div>
                    <SeatsForm movieId={movie.id} onCloseModal={closeModalHandler}/>
                </div>
            </div>
        </Modal>
    )
}

export default MovieShopping;