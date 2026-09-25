import "./service.css"

import IconPerson from "../../assets/icons/person.png"
import IconComercial from "../../assets/icons/icone-comercial-v2.png"
import IconLava from "../../assets/icons/icone-lavagem.png"

function Service() {
    return (
        <section className="service" id="service">
            <div className="service_container">
                <div className="service_title">
                    <h1>NOSSOS SERVIÇOS</h1>
                    <div className="border"></div>
                    <p>Da roupa do dia a dia às peças que exigem cuidados especiais, temos soluções pensadas para tornar a sua rotina mais simples. </p>
                    <p>Escolha o serviço que melhor se adapta às suas necessidades e deixe o cuidado das suas roupas nas mãos da Lavandaria KC. </p>
                </div>

                <div className="service-wrap">
                    <div className="service_card " id="card1">
                        <div className="icon_service_card">
                            <img src={IconPerson} alt="" />
                            <h2>SELF-SERVICE</h2>
                        </div>
                        <div className="service_card_content">
                            <h3>Lave as suas roupas com praticidade e autonomia. </h3>
                            <p>O serviço Self-Service permite-lhe cuidar das suas roupas de forma simples, rápida e conveniente. Ideal para quem prefere realizar a lavagem por conta própria, com equipamentos adequados e sem precisar de ter uma máquina de lavar em casa. </p>

                            <h3>Lavagem — 2.500 Kz/ciclo </h3>
                            <h3>Secagem — 1.500 Kz/ciclo </h3>
                            <h3>Lavagem + Secagem — 3.500 Kz </h3>
                        </div>
                    </div>

                    <div className="service_card">
                        <div className="icon_service_card">
                            <img src={IconLava} alt="" />
                            <h2>SERVIÇO DE LAVAGEM</h2>
                        </div>
                        <div className="service_card_content" id="lavagem">
                            <h3>Nós lavamos. Você recebe as suas roupas limpas e cuidadas. </h3>
                            <p>Entregue-nos as suas peças e deixe o trabalho connosco. Tratamos as suas roupas com atenção, utilizando processos adequados para a lavagem de diferentes tipos de peças. </p>
                            <p>Uma solução prática para quem quer poupar tempo e manter as suas roupas sempre cuidadas. </p>
                            <h3>Menos preocupação. Mais tempo para si. </h3>
                        </div>
                    </div>

                    <div className="service_card" id="card1">
                        <div className="icon_service_card">
                            <img src={IconPerson} alt="" />
                            <h2>SERVIÇO COMPLETO</h2>
                        </div>
                        <div className="service_card_content">
                            <h3>Do cuidado à finalização, tratamos das suas roupas por si. </h3>
                            <p>Para quem procura uma solução completa, cuidamos das diferentes etapas do processo: lavagem, secagem, engomagem e preparação das peças para entrega.</p>
                            <p>Ideal para quem quer receber as suas roupas prontas a usar, sem precisar de se preocupar com cada etapa. </p>
                            <h3>Entregue. Nós cuidamos. Você recebe pronto.</h3>
                        </div>
                    </div>

                    <div className="service_card">
                        <div className="icon_service_card">
                            <img src={IconComercial} alt="" />
                            <h2>COMERCIAL</h2>
                        </div>
                        <div className="service_card_content" id="lavagem">
                            <h3>Soluções de lavandaria para empresas e negócios. </h3>
                            <p>A Lavandaria KC também atende empresas que precisam de um serviço regular e profissional para o tratamento das suas roupas e tecidos. </p>
                            <p>Atendemos diferentes necessidades comerciais, desde uniformes e fardamentos até outros artigos que necessitem de lavagem, secagem ou engomagem. </p>
                            <h3>Para empresas que precisam de um parceiro de confiança. </h3>
                            {/* btn ligar */}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Service