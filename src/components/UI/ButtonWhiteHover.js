import classes from './css/ButtonWhiteHover.module.css';

const ButtonWhiteHover = props => {
    return (
        <button className={`${classes.button} ${props.className}`} onClick={props.onClick} type={props.type}>
            {props.children}
        </button>
    )
}

export default ButtonWhiteHover;