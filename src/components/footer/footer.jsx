import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">

                <div className="footer_social">
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>

                </div>

                <p className="copyright">
                    © 2026 Lavandaria KC. Todos os direitos reservados.
                </p>

                <p className="dev">
                    Desenvolvido pela{" "}
                    <Link to="/">
                        Growth2Business
                    </Link>
                </p>

            </div>
        </footer>
    );
}

export default Footer;

