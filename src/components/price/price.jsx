import "./price.css"

import IconFerro from "../../assets/icons/engomar.png"
import IconLavar from "../../assets/icons/lavar.png"
import { Link } from "react-router-dom"

function Price() {
    return (
        <section className="price" id="price">
            <div className="price_container">
                <div className="price_title">
                    <h1>TABELA DE PREÇOS</h1>
                    <div className="border"></div>
                    <p id="bold">Serviços de qualidade, com preços claros e acessíveis. </p>
                    <p>Os valores podem variar de acordo com o tipo de tecido, tamanho da peça, nível de sujidade e tratamento necessário. </p>
                </div>

                <div className="price_wrap">
                    <div className="price_card">
                        <div className="price_card_icon">
                            <img src={IconLavar} alt="" />
                            <h2>SERVIÇOS LAVAR E DOBRAR</h2>
                        </div>
                        <div className="text">
                            <h4>Lavagem, secagem e dobra para deixar as suas roupas prontas a guardar ou usar. </h4>
                        </div>
                        <div className="price_card_content">
                            <p id="bold">Peça <span>Preço</span></p>
                            <p>T-shirt | <span>700 kz</span></p>
                            <p>Camisa | <span>900 kz</span></p>
                            <p>Calça | <span>900 kz</span></p>
                            <p>Calça Jeans | <span>1.000 kz</span></p>
                            <p>Saia | <span>900 kz</span></p>
                            <p>Vestido simples | <span>1.500 kz</span></p>
                            <p>Casaco | <span>1.500 kz</span></p>
                            <p>Fato completo | <span>3.000 kz</span></p>
                            <p>Lençol | <span>1.200 kz</span></p>
                            <p>Toalha de banho | <span>900 kz</span></p>
                            <p>Cobertor | <span>2.500 kz</span></p>
                        </div>
                        <Link className="solicitar_service" to="/Solicitar-servico">Solicitar serviço</Link>
                    </div>

                    <div className="price_card">
                        <div className="price_card_icon">
                            <img src={IconFerro} alt="" />
                            <h2>SERVIÇO LAVAGEM A SECO</h2>
                        </div>
                        <div className="text">
                            <h4>Cuidados especiais para peças que exigem um tratamento mais delicado.  </h4>
                            <p>A lavagem a seco é indicada para peças que necessitam de cuidados específicos e que não devem ser tratadas através de uma lavagem convencional. </p>
                        </div>
                        <div className="price_card_content">
                            <p>Camisa | <span>1.200 kz</span></p>
                            <p>Calça | <span>1.500 kz</span></p>
                            <p>Saia | <span>1.500 kz</span></p>
                            <p>Casaco | <span>2.500 kz</span></p>
                            <p>Fato de 2 peças | <span>4.000 kz</span></p>
                            <p>Fato de 3 peças | <span>5.000 kz</span></p>
                            <p>Vestido simples | <span>3.000 kz</span></p>
                            <p>Vestido de festa | <span>5.000 kz</span></p>
                            <p>Fato delicado | <span>4.000 kz</span></p>
                            <p>Gravata | <span>1.000 kz</span></p>
                        </div>
                        <Link className="solicitar_service" to="/Solicitar-servico">Solicitar serviço</Link>
                    </div>

                    <div className="price_card">
                        <div className="price_card_icon">
                            <img src={IconFerro} alt="" />
                            <h2>SERVIÇO DE PASSAR</h2>
                        </div>
                        <div className="text">
                            <h4>Roupas bem cuidadas, engomadas e prontas para usar. </h4>
                            <p>Tratamos das suas peças com atenção aos diferentes tipos de tecido, deixando-as apresentadas e prontas para o seu dia a dia, trabalho ou ocasião especial. </p>
                        </div>
                        <div className="price_card_content">
                            <p>T-shirt | <span>400 kz</span></p>
                            <p>Camisa | <span>600 kz</span></p>
                            <p>Calça | <span>600 kz</span></p>
                            <p>Saia | <span>600 kz</span></p>
                            <p>Vestido Simples| <span>1000 kz</span></p>
                            <p>Casaco | <span>1.200 kz</span></p>
                            <p>Fato completo| <span>2.000 kz</span></p>
                            <p>Lençol | <span>800 kz</span></p>
                            <p>Toalha de banho | <span>600 kz</span></p>
                        </div>
                        <Link className="solicitar_service" to="/Solicitar-servico">Solicitar serviço</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Price