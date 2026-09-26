import { FaWhatsapp } from "react-icons/fa";
import "./whatsappButton.css";

function WhatsappButton() {
    const phone = "244922116411"; // Código do país + número
    const message = "Olá! Encontrei a [Nome da Lavandaria] através do vosso site e gostaria de saber mais sobre os serviços disponíveis, preços e condições de atendimento. Poderiam indicar-me um consultor?";

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