import { useContext, useReducer, useState } from 'react';
import MovieCtx from '../../store/context';
import classes from './css/SeatsForm.module.css';
import Seat from './Seat';

const setSelectedSeats = (state, action) => {
    if (action.checked) {
        return ([...state, action.id])
    }
    else {
        let newList = state;
        const unselectedSeatId = newList.findIndex(id => id === action.id);
        newList.splice(unselectedSeatId, 1);
        return (newList)
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

    const [selectedSeats, dispatchSeats] = useReducer(setSelectedSeats, []);
    const movieCtx = useContext(MovieCtx);

    const selectHandler = input => {
        dispatchSeats(input);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const movieCtxIndex = movieCtx.findIndex(movie => movie.id === props.movieId);
        movieCtx[movieCtxIndex].onSeatsBooked(selectedSeats);
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
                <button type='submit'>Submit</button>
            </form> 
        </div>
    </>)
}

export default SeatsForm;
