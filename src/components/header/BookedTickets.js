import classes from './css/BookedTickets.module.css';
import { todayMovies } from '../movies/MoviesList';
import CloseButton from '../UI/CloseButton';
import Modal from '../UI/Modal';

const BookedTickets = props => {
    const movie = todayMovies.find(movie => movie.id === props.movieId)
    return (
        <div className={classes.movie}>  
            <div className={classes['left-div']}>
            <img src={movie.image} alt='movie poster'/> 
            <div className={classes['movie-text']}>
                <h2>{movie.name} <small>{`(${movie.hour})`}</small></h2>
                <p> Assentos: {props.seats.map((seat, i) => i === props.seats.length - 1?
         `${seat}`: `${seat}, `)}</p>
            </div>
            </div>
            <div className={classes['right-div']}>
               <CloseButton onClick={() => props.onReturn(movie.id)}/> 
            </div>
        </div>
    )
}

export default BookedTickets;