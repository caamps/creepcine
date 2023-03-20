import classes from './css/UserSessions.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import MovieCtx from '../../store/context';
import BookedTickets from './BookedTickets';

const UserSessions = props => {
    const movieCtx = useContext(MovieCtx);
    const bookedMovies = movieCtx.filter(movie => movie.seats_taken.length > 0);

    const returnTickets = movieId => {
        const index = movieCtx.findIndex(movie => movie.id === movieId);
        movieCtx[index].onSeatsBooked({action: 'RETURN_TICKETS'})
    }

    let content = 'Suas sessões'
    if (bookedMovies.length === 0){
        content = 'Você ainda não comprou ingressos.'
    }
    return (
        <Modal onClose={props.onClose}>
            <div style={{textAlign: 'center'}}>
                <h1>{content}</h1>
            </div>
            {bookedMovies.map(movie => <BookedTickets movieId={movie.id} seats={movie.seats_taken} key={movie.id} onReturn={returnTickets}/>)}
        </Modal>
    )
}

export default UserSessions;