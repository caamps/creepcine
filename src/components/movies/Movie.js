import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './css/Movie.module.css';
import MovieShopping from '../shopping/MovieShopping';
import MovieCtx from '../../store/context';

const Movie = props => {
    const movie = props.movie;
    const [isAvailable, setAvailable] = useState(true);
    const [isOnShopping, setIsOnShopping] = useState(false);
    const movieCtx = useContext(MovieCtx);

    const is_soldoff = movieCtx[movieCtx.findIndex(item => item.id === movie.id)].is_soldoff;

    let isAvailableP = <p style={{color: 'green'}}>Disponível</p>

    if(is_soldoff){
        isAvailableP = <p style={{color: 'crimson'}}>Esgotado</p>
    }

    const openModal = () => {
        setIsOnShopping(true);
    }

    const closeModal = () => {
        setIsOnShopping(false);
    }

    return (
        <>
        <div className={classes.movie} onClick={openModal}>  
            <div className={classes['left-div']}>
            <img src={movie.image} alt='movie poster'/> 
            <div className={classes['movie-text']}>
                <h2>{movie.name} <small>{`(${movie.year})`}</small></h2>
                <p>{movie.time}</p>
            </div>
            </div>
            <div className={classes['right-div']}>
                {isAvailableP}
                <small>{movie.hour}</small>
            </div>
        </div>
        {isOnShopping && <MovieShopping movie={movie} available={isAvailableP} onCloseModal={closeModal}/>}
        </>
    )
}

export default Movie;