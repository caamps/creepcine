import {  useEffect, useReducer, useRef } from 'react';
import classes from './css/TicketType.module.css';


const Input = props => {
    const inputRef = useRef();

    const subtractHandler = () => {
        if (props.value === 0){
            return
        }
        props.onChange({action: 'DECREASE', type:`${props.id}`})
    }

    const addHandler = () => {
        if (props.value === props.amount){
            return
        }
        props.onChange({action: 'INCREASE', type:`${props.id}`})
    }

    return (
        <div>
            <button onClick={subtractHandler} type='button'>-</button>
            <span>{props.value}</span>
            <button onClick={addHandler} type='button'>+</button>
        </div>
    )
}

const setTickets = (state, action) => {
        switch (action.action) {
            case 'ADD_SEAT': {
                return ({normal: state.normal + 1, half: state.half, total: state.total + 1})
            }
            case 'REMOVE_SEAT': {
                if (state.half > state.normal){
                    return ({normal: state.normal, half: state.half - 1, total: state.total - 1})
                }
                else {
                    return ({normal: state.normal - 1, half: state.half, total: state.total - 1})
                }
            }
            case 'INCREASE': {
                if (action.type === 'normal') {
                    return({normal: state.normal + 1, half: state.half -1, total: state.total})
                }
                else {
                    return({normal: state.normal - 1, half: state.half + 1, total: state.total})
                }
            }
            case 'DECREASE': {
                if (action.type === 'normal') {
                    return({normal: state.normal - 1, half: state.half + 1, total: state.total})
                }
                else {
                    return({normal: state.normal + 1, half: state.half - 1, total: state.total})
                }
            }
        }
    }


const TicketType = props => {
    const selectedSeatsList = props.selectedSeats.list;
    const [ticketTypes, dispatchTicket] = useReducer(setTickets, {normal: 0, half: 0, total: 0})

    useEffect(() => {
        const last_action = props.selectedSeats.last_action;
        if (last_action === 'SELECTED') {
            dispatchTicket({action: 'ADD_SEAT'})
        }
        else if (last_action === 'UNSELECTED'){
            dispatchTicket({action: 'REMOVE_SEAT'})
        } 
    }, [selectedSeatsList])

    return(
        <>
        <p>Assentos selecionados: {selectedSeatsList.map((seat, i) => i === selectedSeatsList.length - 1?
         `${seat}`: `${seat}, `)}</p>

            <Input id='normal' value={ticketTypes.normal} amount={ticketTypes.total} onChange={dispatchTicket}/>
            <Input id='half' value={ticketTypes.half} amount={ticketTypes.total} onChange={dispatchTicket}/>

        <button type='submit'>aaa</button>
        </>
    )
}

export default TicketType;