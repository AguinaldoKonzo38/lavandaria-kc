import "./contato.css"
function Contacto() {
    return (
        <section className="contato">
            <div className="contato_container">
                <div className="contato_title">
                    <h1>Contacto</h1>
                    <div className="border"></div>
                </div>

                <div className="contato_content">
                    <div className="contato_card">
                        <div>
                            <h2>ENDEREÇO</h2>
                            <p>Av. Bernardino de Campos 98, Pinheiros </p>
                            <p>São Paulo, SP</p>
                        </div>
                        <div>
                            <h2>TELEFONE</h2>
                            <p>+244 923 000 000</p>
                        </div>
                    </div>
                    <div className="contato_card">
                        <div>
                            <h2>EMAIL</h2>
                            <p>info@meusite.com</p>
                        </div>
                        <div>
                            <h2>FUNCIONAMENTO</h2>
                            <p>Seg - Sex: 8:00 - 20:00</p>
                            <p>​​Sábado: 9:00 - 19:00</p>
                            <p>Domingo: 9:00 - 20:00</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contacto