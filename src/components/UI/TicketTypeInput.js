import ButtonWhiteHover from './ButtonWhiteHover';
import classes from './css/TicketTypeInput.module.css';

const Input = props => {

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

    let id = 'Inteira';
    if (props.id === 'half'){
        id = 'Meia-entrada'
    }

    return (
        <div className={classes['big-div']}>
            <div className={classes['btns-div']}>
                <ButtonWhiteHover onClick={subtractHandler} type='button' className={classes['add-subtract-btn']}>-</ButtonWhiteHover>
                <span>{props.value}</span>
                <ButtonWhiteHover onClick={addHandler} type='button' className={classes['add-subtract-btn']}>+</ButtonWhiteHover>
            </div>
            <div className={classes['description-div']}>
                <p>{id}</p>
            </div>
        </div>
    )
}

export default Input;