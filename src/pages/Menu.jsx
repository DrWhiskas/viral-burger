import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOrder } from '../features/store';
import Header from '../components/Header';
import burgers from '../data/burger.json';
import MenuForm from '../components/MenuForm';
import Cart from '../components/Cart';
import Modal from '../components/Modal';

import '../styles/menu.css';

export default function Menu() {
	const dispatch = useDispatch()
	const newOrder = useSelector((state) => state.order)

	// order variables
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [orderId, setOrderId] = useState(0)
	const [isCartReset, setIsCartReset] = useState(false);
	//modal variables
	const [isOpenModal, setIsModalOpen] = useState(true)



	useEffect(() => {
		console.log(newOrder);
	}, [newOrder]);

	// ORDER FUNCTIONS 
	function addToCart(menuTitle, burgerPrice) {
		setCart([...cart, { title: menuTitle, price: parseFloat(burgerPrice) }]);
		setTotalPrice(parseFloat(totalPrice) + parseFloat(burgerPrice));
		
	}

	//remove articles from the order
	function removeArticle(index) {
		const updatedCart = [...cart];
		updatedCart.splice(index, 1);
		setCart(updatedCart);
		const updatedTotalPrice = totalPrice - cart[index].price;
		setTotalPrice(updatedTotalPrice);
	}

	//dispatch the order
	function handleOrder(){
		setOrderId(ticketNumber(1,100))
		dispatch(addOrder(cart, totalPrice, orderId));
		//setIsCartReset(true);
		setIsModalOpen(true);
	}
	//generate a random number for the ticket Id
	function ticketNumber(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function closeModal(){
		setIsModalOpen(false)
		//setIsCartReset(false)
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

			{isCartReset ? 
				<Cart cart={[]} />
			 : 
				<Cart
					cart={cart}
					removeArticle={removeArticle}
					totalPrice={totalPrice}
					handleOrder={handleOrder}
				/>
			}
			{isOpenModal ??
				<Modal 
					message="Merci d'avoir commandé !"
					closeModal={closeModal}
				/>
			}
		</>
	);
}
