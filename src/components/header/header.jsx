import "./header.css"
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useState } from "react"

import logo from "../../assets/images/logo-kc.png"


function Header() {

    const scrollToSection = (id) => {

        const section = document.getElementById(id);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

        }

    };

    return (
        <header className="header">
            <div className="head_info">
                <p>Av. 21 de Janeiro, Luanda (região do Morro Bento / Paviterra) | Tel: +244 922 116 411</p>
            </div>
            <div className="header_container">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="KC" /></Link>
                </div>

                <nav className="nav_links">
                    <Link to="/" className="links" onClick={() => scrollToSection("service")}> Serviços</Link>
                    <Link to="/" className="links" onClick={() => scrollToSection("price")}>Preços</Link>
                    <Link to="/" className="links" onClick={() => scrollToSection("contato")}>Contacto</Link>
                </nav>

                {/* menu mobile */}
                {/* <FaBars onClick={() => setIsOpen(true)} className="menu_mobile" size={26} /> */}
                <FaBars className="menu_mobile"  color="white" size={26} />

            </div>
{/* 
            <ModalMenuMobile
                isOpen={isOpen}
                onClose={() => setIsOpen(false)} /> */}

        </header >
    )
}
export default Header