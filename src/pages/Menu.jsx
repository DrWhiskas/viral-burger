import React from "react";
import Header from "../components/Header";
import burgers from '../data/burger.json';
import MenuForm from "../components/MenuForm";
import '../styles/menu.css'

export default function Menu(){

    console.log(burgers)


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
						/>
					))}
				</div>
			</>
		);
}