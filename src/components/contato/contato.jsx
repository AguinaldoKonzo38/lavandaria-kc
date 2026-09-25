import "./contato.css"
function Contacto() {
    return (
        <section className="contato" id="contato">
            <div className="contato_container">
                <div className="contato_title">
                    <h1>Contacto</h1>
                    <div className="border"></div>
                </div>

                <div className="contato_content">
                    <div className="contato_card">
                        <div>
                            <h2>ENDEREÇO</h2>
                            <p>Av. 21 de Janeiro, Luanda </p>
                            <p>Visite a <strong>Lavandaria KC</strong> e entregue as suas roupas à nossa equipa. </p>
                        </div>
                        <div>
                            <h2>TELEFONE</h2>
                            <p>Tem dúvidas sobre um serviço, preço ou tipo de peça? Entre em contacto connosco. </p>
                             <p> +244 922 116 411</p>
                        </div>
                    </div>
                    <div className="contato_card">
                        <div>
                            <h2>EMAIL</h2>
                            <p>info@meusite.com</p>
                            <p>Para pedidos de informação, parcerias ou serviços comerciais, envienos uma mensagem. </p>
                        </div>
                        <div>
                            <h2>FUNCIONAMENTO</h2>
                            <p>Segunda a Sexta-feira: 7:30 – 21:30</p>
                            <p>Sábado: 7:30 – 20:00</p>
                            <p>Domingo: 8:30 – 17:00</p>
                            <p>Estamos disponíveis para cuidar das suas roupas durante toda a semana. </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contacto