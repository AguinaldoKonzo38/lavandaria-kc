import "./modal-menu-mobile.css"
import { Link } from "react-router-dom";

import ModalMenuMobile from "./modal-mobile.jsx"

function ModalMenuMobile({ isOpen, onClose }) {

    if (!isOpen) return null

    // const scrollToSection = (id) => {

    //     const section = document.getElementById(id);

    //     if (section) {

    //         section.scrollIntoView({
    //             behavior: "smooth",
    //             block: "start",
    //         });

    //     }

    // };

    return (
        <div className="mask" onClick={() => onClose(false)}>

            <div className="modal-menu">
                <div className="btn-close-menu">
                    <button
                        onClick={() => onClose(false)}
                    >X</button>
                </div>

                <nav className="nav-links-mobile">
                    <Link className="ancora" to="/"><h6 onClick={() => scrollToSection("service")}>Serviços</h6></Link>
                    <Link className="ancora" to="/"><h6 onClick={() => scrollToSection("price")} >preços</h6></Link>
                    {/* <Link className="ancora" to="/"><h6 onClick={() => scrollToSection("mission")}>Missão</h6></Link> */}
                    {/* <Link className="ancora" to="/" ><h6>Notícias</h6></Link> */}
                    <Link className="ancora" to="/"><h6 onClick={() => scrollToSection("contato")} >Contacto</h6></Link>
                </nav>

            </div>

        </div>
    )
}
export default ModalMenuMobile;