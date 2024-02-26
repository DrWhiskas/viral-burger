import React, {useState} from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import '../styles/cart.css'
export default function Cart({cart, removeArticle, totalPrice, showCart}){
    const [isOpenCart, setIsOpenCart] = useState(false)

    function handleShowCart(){
        setIsOpenCart(!isOpenCart)
    }
    function HandleArrow(){
        if(isOpenCart){
            return <FaChevronUp className="arrow" />;
        }
        else{
            return <FaChevronDown className="arrow" />;
        }
    }

    return (
			<div className={isOpenCart ? 'cart' : 'cart-close'}>
				<div className="cart__header">
					<div>
						<FaShoppingCart /> Commande:
					</div>
					<button className="cart__btn" onClick={handleShowCart}>
						<HandleArrow />
					</button>
				</div>
				<div className="cart__container">
					<ul className="cart__list">
						{cart.map((item, index) => (
							<li className="cart__list__item" key={index}>
								{item.title}
								<div className="cart__list__item__info">
									<span className="cart__list__item__price">{item.price}€</span>
									<button
										className="cart__list__item__btn"
										onClick={() => removeArticle(index)}
									>
										<TiDelete className="delete" />
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className="cart__total">
					Total: <span className="cart__price">{totalPrice}€</span>
				</div>
			</div>
		);
}