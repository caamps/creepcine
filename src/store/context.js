import { createContext } from "react";


const MovieCtx = createContext([
    {
        id: 'm1', is_soldoff: false, onSeatsBooked: () => {}, seats_taken: []
    }, 
    {
        id: 'm2', is_soldoff: false, onSeatsBooked: () => {}, seats_taken: []
    },
    {
        id: 'm3', is_soldoff: false, onSeatsBooked: () => {}, seats_taken: []
    },
    {
        id: 'm4', is_soldoff: false, onSeatsBooked: () => {}, seats_taken: []
    },
]);

export default MovieCtx;