import React from "react";
import Img from '../assets/Mburger.png';
import '../styles/hero.css'
import { Link } from "react-router-dom";
export default function Hero(){
    return (
			<section className="hero">
				<div className="hero__container">
					<div className="hero__container__text">
						<div className="hero__container__text__container">
							LIVRAISON & COLLECTE <br />
							<span>
								PAS MAL LES B...
								<br />
								BURGERS!
							</span>
							<Link to="/menu">
								<button className="btn">Commander en ligne</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		);
}