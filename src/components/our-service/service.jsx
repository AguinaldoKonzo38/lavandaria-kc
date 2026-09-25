import "./service.css"

import IconPerson from "../../assets/icons/person.png"

function Service() {
    return (
        <section className="service" id="service">
            <div className="service_container">
                <div className="service_title">
                    <h1>NOSSOS SERVIÇOS</h1>
                    <div className="border"></div>
                    <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo lugar para você contar sua história e permitir que seus clientes saibam um pouco mais sobre você.</p>
                </div>

                <div className="service-wrap">
                    <div className="service_card " id="card1">
                        <div className="icon_service_card">
                            <img src={IconPerson} alt="" />
                            <h2>SELF-SERVICE</h2>
                        </div>
                        <div className="service_card_content">

                            <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo lugar para você contar sua história e permitir que seus clientes saibam um pouco mais sobre você.</p>
                        </div>
                    </div>

                    <div className="service_card">
                        <div className="icon_service_card">
                            <img src={IconPerson} alt="" />
                            <h2>SERVIÇO DE LAVAGEM</h2>
                        </div>
                        <div className="service_card_content">

                            <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo lugar para você contar sua história e permitir que seus clientes saibam um pouco mais sobre você.</p>
                        </div>
                    </div>

                    <div className="service_card" id="card1">
                        <div className="icon_service_card">
                            <img src={IconPerson} alt="" />
                            <h2>SERVIÇO COMPLETO</h2>
                        </div>
                        <div className="service_card_content">

                            <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo lugar para você contar sua história e permitir que seus clientes saibam um pouco mais sobre você.</p>
                        </div>
                    </div>

                    <div className="service_card">
                        <div className="icon_service_card">
                            <img src={IconPerson} alt="" />
                            <h2>COMERCIAL</h2>
                        </div>
                        <div className="service_card_content">

                            <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo lugar para você contar sua história e permitir que seus clientes saibam um pouco mais sobre você.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Service