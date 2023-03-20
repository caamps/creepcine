import classes from './css/Header.module.css';
import cinemaImage from '../../assets/cinema.jpg';
import { useState } from 'react';
import UserSessions from './UserSessions';

const Header = () => {
    const [sessionsModal, setSessionsModal] = useState(false);
    const openModal = () => {
        setSessionsModal(true);
    }
    const closeModal = () => {
        setSessionsModal(false);
    }
    return (
        <>
        <header className={classes.header}>
            <span>CreepCine</span>
            <button className={classes.button} onClick={openModal}>
                Suas sessões
            </button>
        </header>   
        <div className={classes.centralDiv}>
            <h1>Sessões de hoje</h1>
            <h3>Ingressos por R$10 cada.</h3>
        </div>  
        {sessionsModal && <UserSessions onClose={closeModal}/>}
        </>
    )
}

export default Header;