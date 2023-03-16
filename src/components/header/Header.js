import classes from './css/Header.module.css';
import cinemaImage from '../../assets/cinema.jpg';

const Header = () => {
    return (
        <>
        <header className={classes.header}>
            <span>CreepCine</span>
            <button className={classes.button}>
                Suas sessões
            </button>
        </header>   
        <div className={classes.centralDiv}>
            <h1>Sessões de hoje</h1>
            <h3>Ingressos por R$10 cada.</h3>
        </div>  
        </>
    )
}

export default Header;