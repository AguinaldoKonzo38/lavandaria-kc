import "./price.css"

import IconFerro from "../../assets/icons/engomar.png"
import IconLavar from "../../assets/icons/lavar.png"

function Price() {
    return (
        <section className="price" id="price">
            <div className="price_container">
                <div className="price_title">
                    <h1>TABELA DE PREÇOS</h1>
                    <div className="border"></div>
                    <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo lugar para você contar sua história e permitir que seus clientes saibam um pouco mais sobre você.</p>
                </div>

                <div className="price_wrap">
                    <div className="price_card">
                        <div className="price_card_icon">
                            <img src={IconLavar} alt="" />
                            <h2>SERVIÇOS LAVAR E DOBRAR</h2>
                        </div>
                        <div className="price_card_content">
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                        </div>
                    </div>

                    <div className="price_card">
                        <div className="price_card_icon">
                            <img src={IconFerro} alt="" />
                            <h2>SERVIÇO LAVAGEM A SECO</h2>
                        </div>
                        <div className="price_card_content">
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                        </div>
                    </div>

                    <div className="price_card">
                        <div className="price_card_icon">
                            <img src={IconFerro} alt="" />
                            <h2>SERVIÇO DE PASSAR</h2>
                        </div>
                        <div className="price_card_content">
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                            <p>Camisa | <span>1000 kz</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Price