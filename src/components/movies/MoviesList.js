import classes from './css/MoviesList.module.css';
import Movie from './Movie';
import days500 from '../../assets/500days.jpg';
import zumbilandia from '../../assets/zumbilandia.jpg';
import clube from '../../assets/clube.jpg';
import efeito from '../../assets/efeito_borboleta.jpg';
import Modal from '../UI/Modal';


const todayMovies = [{id: 'm1', name: 'Zumbilândia', year: '2009', time: '1h28min', hour:'16:00', image: zumbilandia},
{id: 'm2', name: 'Efeito borboleta', year: '2004', time: '2h', hour:'18:00', image: efeito},
{id: 'm3', name: '500 dias com ela', year: '2009', time: '1h35min', hour:'20:00', image: days500},
{id: 'm4', name: 'Clube da luta', year: '1999', time: '2h19min', hour:'21:30', image: clube}];

const movieItems = todayMovies.map(movie => <Movie movie={movie} key={movie.id}/>)

const MoviesList = () => {
    return (
        <div className={classes['movies-list']}>
            {movieItems}
        </div>
    )
}

export default MoviesList;