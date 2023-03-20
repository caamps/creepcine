import { useReducer } from "react";
import MovieCtx from "./context";


const seatsChangeHandler = (state, action) => {
    if (action.action === 'BOOK_TICKETS') {
        const taken_seats = [...state.taken_seats, ...action.seats];
        if (taken_seats.length === 15) {
            return ({is_soldoff: true, taken_seats: taken_seats})
        }
        else {
            return ({is_soldoff: false, taken_seats: taken_seats})
        }
    }
    else if (action.action === 'RETURN_TICKETS') {
        return ({is_soldoff: false, taken_seats: []})
    }   
}


const MovieCtxProvider = props => {

    const [m1State, setm1State] = useReducer(seatsChangeHandler, {is_soldoff: false, taken_seats: []});
    const [m2State, setm2State] = useReducer(seatsChangeHandler, {is_soldoff: false, taken_seats: []});
    const [m3State, setm3State] = useReducer(seatsChangeHandler, {is_soldoff: false, taken_seats: []});
    const [m4State, setm4State] = useReducer(seatsChangeHandler, {is_soldoff: false, taken_seats: []});


    const movieCtx = [
        {
            id: 'm1', is_soldoff: m1State.is_soldoff, onSeatsBooked: (action) => {setm1State(action)}, seats_taken: m1State.taken_seats,
        }, 
        {
            id: 'm2', is_soldoff: m2State.is_soldoff, onSeatsBooked: (action) => {setm2State(action)}, seats_taken: m2State.taken_seats,
        },
        {
            id: 'm3', is_soldoff: m3State.is_soldoff, onSeatsBooked: (action) => {setm3State(action)}, seats_taken: m3State.taken_seats,
        },
        {
            id: 'm4', is_soldoff: m4State.is_soldoff, onSeatsBooked: (action) => {setm4State(action)}, seats_taken: m4State.taken_seats,
        },
    ]

    return (
        <MovieCtx.Provider value={movieCtx}>
            {props.children}
        </MovieCtx.Provider>     
    )
}

export default MovieCtxProvider;