import classes from './css/Modal.module.css';
import { createPortal } from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop}/>
}

const ModalOverlay = props => {
    return (
        <div className={classes['modal-overlay']}>
                {props.children}
        </div>
    )
}

const Modal = props => {
    const portalLocation = document.getElementById('overlays')
    return (
        <>
        {createPortal(<Backdrop/>, portalLocation)}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
        </>
    )
}

export default Modal;