import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import burgers from '../data/burger.json';
import MenuForm from '../components/MenuForm';
import Cart from '../components/Cart';
import '../styles/menu.css';

export default function Menu() {
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		console.log(totalPrice);
	}, [totalPrice]);

	function addToCart(menuTitle, burgerPrice) {
		setCart([...cart, { title: menuTitle, price: parseFloat(burgerPrice) }]);
		setTotalPrice(parseFloat(totalPrice) + parseFloat(burgerPrice));
	}
	function removeArticle(index) {
		const updatedCart = [...cart];
		updatedCart.splice(index, 1);
		setCart(updatedCart);
		const updatedTotalPrice = totalPrice - cart[index].price;
		setTotalPrice(updatedTotalPrice);
	}

	return (
		<>
			<Header />
			<h1 className="menu__title title">Nos Menu</h1>
			<div className="menu">
				{burgers.map((burger, key) => (
					<MenuForm
						key={burger.id}
						menuTitle={burger.title}
						menuImage={burger.image}
						menuPrice={burger.price}
						addArticle={() => addToCart(burger.title, burger.price)}
					/>
				))}
			</div>
			<Cart cart={cart} removeArticle={removeArticle} totalPrice={totalPrice}/>
		</>
	);
}
