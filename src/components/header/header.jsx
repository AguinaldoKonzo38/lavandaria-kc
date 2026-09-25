import "./header.css"

import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="head_info">
                <p>Av. 21 de Janeiro, Lunada (região do Morro Bento / Paviterra)</p>
                <p>Tel: +244 922 116 411</p>
            </div>
            <div className="header_container">
                <div className="logo">
                    <Link to="/"><img src="" alt="KC" /></Link>
                </div>

                <nav className="nav_links">
                    <Link to="/" className="links">Serviços</Link>
                    <Link to="/" className="links">Preços</Link>
                    <Link to="/" className="links">Contacto</Link>
                </nav>

                {/* menu mobile */}
            </div>


        </header>
    )
}
export default Header