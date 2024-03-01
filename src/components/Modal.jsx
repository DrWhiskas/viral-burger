import React from "react";
import { IoClose } from 'react-icons/io5';
import '../styles/modal.css'

export default function Modal({message, closeModal}){
    return (
			<div className="modal">
				<div className="modal__container">
					<IoClose onClick={closeModal}/>
                    <p className="modal__container__text">
                        {message}
                    </p>
                    <button className="modal__btn">Fermer</button>
				</div>
			</div>
		);
}