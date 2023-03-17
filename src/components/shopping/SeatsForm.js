import { useContext, useReducer, useState } from 'react';
import MovieCtx from '../../store/context';
import classes from './css/SeatsForm.module.css';
import Seat from './Seat';
import TicketType from './TicketType';

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
        numberRows = [...numberRows, <td className={classes.numtd}>{i}</td>]
    }

    const [selectedSeats, dispatchSeats] = useReducer(setSelectedSeats, {list: [], last_action: 'CREATED'});
    const movieCtx = useContext(MovieCtx);

    const selectHandler = input => {
        dispatchSeats(input);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const movieCtxIndex = movieCtx.findIndex(movie => movie.id === props.movieId);
        movieCtx[movieCtxIndex].onSeatsBooked(selectedSeats.list);
        props.onCloseModal();
    }


    return (
        <>
        <div className={classes.grid}>
            <div className={classes['row-identification']}>
                <p>C</p> <p>B</p> <p>A</p>
            </div>
            <form onSubmit={submitHandler} className={classes['seat-form']}>
                <table>
                    <tbody>
                <tr>    
                    {thirdRow.map(id => <td className={classes.td}><Seat id={id} key={id} movieId={props.movieId} onCheck={selectHandler}/></td>)}
                </tr>
                <tr>
                    {secondRow.map(id => <td className={classes.td}><Seat id={id} key={id} movieId={props.movieId} onCheck={selectHandler}/></td>)}
                </tr>
                <tr>
                    {firstRow.map(id => <td className={classes.td}><Seat id={id} key={id} movieId={props.movieId} onCheck={selectHandler}/></td>)}
                </tr>
                <tr>
                    {numberRows}
                </tr>
                </tbody>
                </table>
                <div className={classes.screen}>
                    <span>TELA</span>
                </div>  
                <TicketType selectedSeats={selectedSeats}/>
            </form> 
        </div>
    </>)
}

export default SeatsForm;
