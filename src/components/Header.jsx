import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import '../styles/header.css'
export default function Header(){
    const [showLinks, setShowLinks] = useState(false)

    function handleShowLinks(){
        setShowLinks(!showLinks)
    }

    function CreateLinks({link, text}){
        return <li><Link to={link} className="header__links__link">{text}</Link></li>
    }

    return (
			<header className={showLinks ? 'header show-header' : 'header'}>
				<Link className="header__logo" to="/home">
					<img className="logo" src={Logo} alt="logo du site" />
				</Link>

				<ul className="header__links">
					<CreateLinks link="/home" text="Accueil" />
					<CreateLinks link="" text="Menu" />
					<CreateLinks link="" text="Contact" />
				</ul>
				<button className="header__burger" onClick={handleShowLinks}>
					<span className="burger-bar"></span>
				</button>
			</header>
		);
}