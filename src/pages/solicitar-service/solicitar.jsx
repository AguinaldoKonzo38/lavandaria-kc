import { useState } from "react";
import "./SolicitarServico.css";

function SolicitarServico() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    tipoRoupa: "",
    quantidade: "",
    data: "",
    observacoes: "",
  });

  // Tipos de roupa disponíveis para cada serviço
  const tiposDeRoupa = {
    lavagem: [
      "T-shirt",
      "Camisa",
      "Calça",
      "Saia",
      "Vestido simples",
      "Casaco",
      "Fato completo",
      "Lençol",
      "Toalha de banho",
    ],

    lavagemSeco: [
      "Camisa",
      "Calça",
      "Saia",
      "Casaco",
      "Fato de 2 peças",
      "Fato de 3 peças",
      "Vestido simples",
      "Vestido de festa",
      "Vestido delicado",
      "Gravata",
    ],

    engomadoria: [
      "T-shirt",
      "Camisa",
      "Calça",
      "Calça jeans",
      "Saia",
      "Vestido simples",
      "Casaco",
      "Fato completo",
    ],

    roupaCasa: [
      "Lençol",
      "Toalha de banho",
      "Cobertor",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,

      // Quando o serviço muda, limpa o tipo de roupa
      ...(name === "servico" && {
        tipoRoupa: "",
      }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Solicitação enviada com sucesso!");

    setForm({
      nome: "",
      telefone: "",
      email: "",
      servico: "",
      tipoRoupa: "",
      quantidade: "",
      data: "",
      observacoes: "",
    });
  };

  return (
    <main className="solicitar-servico">

      <div className="solicitar-container">

        <div className="solicitar-intro">
          <span>Lavandaria KC</span>

          <h1>
            Solicite o seu serviço
          </h1>

          <p>
            Preencha o formulário abaixo e entraremos
            em contacto consigo para confirmar o seu pedido.
          </p>
        </div>

        <form
          className="servico-form"
          onSubmit={handleSubmit}
        >

          {/* DADOS DO CLIENTE */}

          <div className="form-group">
            <label htmlFor="nome">
              Nome completo
            </label>

            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite o seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="telefone">
                Número de telefone
              </label>

              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="9XX XXX XXX"
                maxLength="9"
                value={form.telefone}
                onChange={(e) => {
                  const value = e.target.value.replace(
                    /\D/g,
                    ""
                  );

                  setForm({
                    ...form,
                    telefone: value,
                  });
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                E-mail
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemplo@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* SERVIÇO */}

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="servico">
                Serviço
              </label>

              <select
                id="servico"
                name="servico"
                value={form.servico}
                onChange={handleChange}
                required
              >
                <option value="">
                  Selecione o serviço
                </option>

                <option value="lavagem">
                  Lavagem
                </option>

                <option value="lavagemSeco">
                  Lavagem a seco
                </option>

                <option value="engomadoria">
                  Engomadoria
                </option>

                <option value="roupaCasa">
                  Roupa de cama e banho
                </option>
              </select>
            </div>

            {/* TIPO DE ROUPA */}

            <div className="form-group">
              <label htmlFor="tipoRoupa">
                Tipo de roupa
              </label>

              <select
                id="tipoRoupa"
                name="tipoRoupa"
                value={form.tipoRoupa}
                onChange={handleChange}
                disabled={!form.servico}
                required
              >
                <option value="">
                  {form.servico
                    ? "Selecione o tipo de roupa"
                    : "Selecione primeiro o serviço"}
                </option>

                {form.servico &&
                  tiposDeRoupa[form.servico]?.map(
                    (roupa) => (
                      <option
                        key={roupa}
                        value={roupa}
                      >
                        {roupa}
                      </option>
                    )
                  )}
              </select>
            </div>

          </div>

          {/* QUANTIDADE E DATA */}

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="quantidade">
                Quantidade de peças
              </label>

              <input
                type="number"
                id="quantidade"
                name="quantidade"
                min="1"
                placeholder="Ex.: 5"
                value={form.quantidade}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="data">
                Data pretendida
              </label>

              <input
                type="date"
                id="data"
                name="data"
                value={form.data}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          {/* OBSERVAÇÕES */}

          <div className="form-group">
            <label htmlFor="observacoes">
              Observações
            </label>

            <textarea
              id="observacoes"
              name="observacoes"
              rows="5"
              placeholder="Alguma informação adicional sobre o seu pedido?"
              value={form.observacoes}
              onChange={handleChange}
            />
          </div>

          {/* BOTÃO */}

          <button
            type="submit"
            className="btn-solicitar"
          >
            Solicitar serviço
            <span>→</span>
          </button>

        </form>

      </div>

    </main>
  );
}

export default SolicitarServico;
