import classes from './css/Modal.module.css';
import { createPortal } from 'react-dom';
import CloseButton from './CloseButton';

const Backdrop = props => {
    return <div className={classes.backdrop}/>
}

const ModalOverlay = props => {
    return (
        <div className={classes['modal-overlay']}>
            <div className={classes.header}>
                <CloseButton onClick={props.onClose}/>
            </div>
                {props.children}
        </div>
    )
}

const Modal = props => {
    const portalLocation = document.getElementById('overlays')
    return (
        <>
        {createPortal(<Backdrop/>, portalLocation)}
        {createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>, portalLocation)}
        </>
    )
}

export default Modal;