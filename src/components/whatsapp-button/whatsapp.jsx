import { FaWhatsapp } from "react-icons/fa";
import "./whatsappButton.css";

function WhatsappButton() {
    const phone = "244925524048"; // Código do país + número
    const message = "Olá! Vim através do site da Mundo Clean e gostaria de falar com um consultor para conhecer melhor os serviços e soluções disponíveis.";

    return (
        <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Falar no WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
}

export default WhatsappButton;