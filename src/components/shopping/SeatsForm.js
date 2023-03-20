import { useContext, useReducer } from 'react';
import MovieCtx from '../../store/context';
import classes from './css/SeatsForm.module.css';
import Seat from './Seat';
import TicketType from './TicketType';
import ButtonWhiteHover from '../UI/ButtonWhiteHover';

const setSelectedSeats = (state, action) => {
    if (action.checked) {
        return ({list: [...state.list, action.id], last_action: 'SELECTED'})
    }
    else {
        const unselectedSeatId = state.list.findIndex(id => id === action.id);
        let newList = state.list;
        newList.splice(unselectedSeatId, 1);
        newList = newList.map(item => item);
        return ({list: newList, last_action: 'UNSELECTED'})
    }
}

const SeatsForm = props => {

    const firstRow = ['a1', 'a2', 'a3', 'a4', 'a5'];
    const secondRow = ['b1', 'b2', 'b3', 'b4', 'b5'];
    const thirdRow = ['c1', 'c2', 'c3', 'c4', 'c5'];
    let numberRows = [];
    for(let i = 1; i <= 5; i++){
        numberRows = [...numberRows, <td className={classes.numtd} key={i}>{i}</td>]
    }

    const [selectedSeats, dispatchSeats] = useReducer(setSelectedSeats, {list: [], last_action: 'CREATED'});
    const movieCtx = useContext(MovieCtx);

    const selectHandler = input => {
        dispatchSeats(input);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const movieCtxIndex = movieCtx.findIndex(movie => movie.id === props.movieId);
        movieCtx[movieCtxIndex].onSeatsBooked({action: 'BOOK_TICKETS', seats: selectedSeats.list});
        props.onCloseModal();
    }


    return (
        <>
        <div className={classes.grid}>
            <form onSubmit={submitHandler} className={classes['seat-form']}>
                <table>
                    <tbody>
                <tr>    
                    <td key={'c'}>C</td>
                    {thirdRow.map(id => <td><Seat id={id} key={id} movieId={props.movieId} onCheck={selectHandler}/></td>)}
                </tr>
                <tr>
                    <td key={'b'}>B</td>
                    {secondRow.map(id => <td><Seat id={id} key={id} movieId={props.movieId} onCheck={selectHandler}/></td>)}
                </tr>
                <tr>
                    <td key={'a'}>A</td>
                    {firstRow.map(id => <td><Seat id={id} key={id} movieId={props.movieId} onCheck={selectHandler}/></td>)}
                </tr>
                <tr>
                    <td key={'empty'}></td>
                    {numberRows}
                </tr>
                </tbody>
                </table>
                <div className={classes.screen}>
                    <span>TELA</span>
                </div>  
                {selectedSeats.list.length > 0 && <ButtonWhiteHover type='submit' className={classes.submit}>Comprar</ButtonWhiteHover>}
            </form> 
            <TicketType selectedSeats={selectedSeats}/>
        </div>
    </>)
}

export default SeatsForm;
