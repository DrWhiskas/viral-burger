import React from "react";
import '../styles/menuForm.css'
export default function MenuForm({menuTitle, menuDescription, menuImage, menuRecipe, menuPrice, addArticle}){
   
    return (
			<article className="menuForm">
				<img className="menuForm__image" src={menuImage} alt={menuTitle} />
				<div className="menuForm__info">
					<h2 className="menuForm__info__title">{menuTitle}</h2>
					<span className="menuForm__info__price">{menuPrice}€</span>
				</div>
				<button className="menuForm__btn" onClick={addArticle}>COMMANDER</button>
			</article>
		);
}