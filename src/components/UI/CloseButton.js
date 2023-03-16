import classes from './css/CloseButton.module.css';
import close from '../../assets/close.svg';

const CloseButton = props => {
    return (
        <>
        <button onClick={props.onClick} id='btn' className={classes['close-button']}>
            <img src={close} className={classes['close-img']} alt='close button'/>  
        </button>
        </>
    )
}

export default CloseButton;