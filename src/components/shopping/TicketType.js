import {  useEffect, useReducer } from 'react';
import classes from './css/TicketType.module.css';
import Input from '../UI/TicketTypeInput';



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
    const totalPrice = (ticketTypes.normal * 10) + (ticketTypes.half * 5);
    useEffect(() => {
        const last_action = props.selectedSeats.last_action;
        if (last_action === 'SELECTED') {
            dispatchTicket({action: 'ADD_SEAT'})
        }
        else if (last_action === 'UNSELECTED'){
            dispatchTicket({action: 'REMOVE_SEAT'})
        } 
    }, [selectedSeatsList])

    let content = <>
     <p>Assentos selecionados: {selectedSeatsList.map((seat, i) => i === selectedSeatsList.length - 1?
         `${seat}`: `${seat}, `)}</p>
         <p>Preço total: R${totalPrice.toFixed(2)}</p>
         <div className={classes['input-div']}>
            <Input id='normal' value={ticketTypes.normal} amount={ticketTypes.total} onChange={dispatchTicket}/>
            <Input id='half' value={ticketTypes.half} amount={ticketTypes.total} onChange={dispatchTicket}/>
        </div></>

    if (selectedSeatsList.length === 0) {   
        content = '';
    }

    return(
        <div className={classes['big-div']}>
            {content}
        </div>
    )
}

export default TicketType;