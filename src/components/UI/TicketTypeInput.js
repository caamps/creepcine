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
                <button onClick={subtractHandler} type='button' className={classes['add-subtract-btn']}>-</button>
                <span>{props.value}</span>
                <button onClick={addHandler} type='button' className={classes['add-subtract-btn']}>+</button>
            </div>
            <div className={classes['description-div']}>
                <p>{id}</p>
            </div>
        </div>
    )
}

export default Input;