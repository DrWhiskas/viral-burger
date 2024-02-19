import React from "react";
import Img from '../assets/Mburger.png';
import '../styles/hero.css'
export default function Hero(){
    return (
			<section className="hero">
				<div className="hero__container">
					<div className="hero__container__text">
						<div className="hero__container__text__container">
                            LIVRAISON & COLLECTE <br/>
                            <span>
                                PAS MAL LES B... 
                                <br/>
                                BURGERS!
                            </span>
                            <button className="btn">Commander en ligne</button>
                        </div>
					</div>
				</div>
			</section>
		);
}