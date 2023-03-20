import { useContext, useReducer, useRef } from 'react';
import MovieCtx from '../../store/context';
import classes from './css/Seat.module.css';
import seat_available from '../../assets/seat_available.svg';
import seat_taken from '../../assets/seat_taken.svg';
import seat_selected from '../../assets/seat_selected.svg';

const seatReducer = (state, action) => {
    if (action === 'CHECKED') {
        return (seat_selected)
    }
    else {
        return (seat_available)
    }
}

const init = isTaken => {
    if (isTaken) {
        return (seat_taken)
    }
    else {
        return (seat_available)
    }
}

const Seat = props => {
    const inputRef = useRef();
    const seatCtx = useContext(MovieCtx);
    
    let isTaken = false;
    const movieIndex = seatCtx.findIndex(movie => movie.id === props.movieId);
    if (seatCtx[movieIndex].seats_taken.includes(props.id)){
        isTaken = true;
    }  
    
    const [seatImg, seatImgDispatcher] = useReducer(seatReducer, isTaken, init);

    const checkHandler = () => {
        if (inputRef.current.checked) {
            seatImgDispatcher('CHECKED');
            props.onCheck({id: props.id, checked: true});
        }
        else{
            seatImgDispatcher('UNCHECKED');
            props.onCheck({id: props.id, checked: false});
        }
    }

    return (
        <>
            <label htmlFor={props.id} className={classes.checkbox}><img src={seatImg} alt='seat checkbox'/></label>
            <input type='checkbox' id={props.id} ref={inputRef} disabled={isTaken} 
            onChange={checkHandler} style={{display: 'none'}}/>
        </>
    )
}

export default Seat;