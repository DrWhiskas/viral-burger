import React, {useState} from "react";
import { FaShoppingCart } from 'react-icons/fa';

export default function Cart({cart, removeArticle, totalPrice}){
    const [isOpenCart, setIsOpenCart] = useState(false)

    function handleShowCart(){
        setIsOpenCart(!isOpenCart)
    }

    return (
			<div className="cart">
				<FaShoppingCart /> <br />
                <ul>
                    {cart.map((item, index) =>(
                        <li key={index}>
                            {item.title} - {item.price}
                            <button onClick={() => removeArticle(index)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
                <div>
                    {totalPrice}
                </div>
			</div>
		);
}