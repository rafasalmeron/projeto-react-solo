import React from 'react';
import { ModalWrapper} from "../styled.jsx";

const Modal = ({children}) => {
    return  <ModalWrapper className="modal-content">
                 {children}
            </ModalWrapper>
};
export default Modal;