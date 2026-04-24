// Formulário de reserva com validação de campos via useState

import { useState } from 'react'

function Contacto() {

  // Valores atualizados a cada tecla (onChange)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [assunto, setAssunto] = useState('')
  const [data, setData] = useState('')
  const [pessoas, setPessoas] = useState('')
  const [mensagem, setMensagem] = useState('')

  // string vazia = sem erro
  const [erroNome, setErroNome] = useState('')
  const [erroEmail, setErroEmail] = useState('')
  const [erroAssunto, setErroAssunto] = useState('')
  const [erroMensagem, setErroMensagem] = useState('')

  // Controla se mostra o formulário ou mensagem de sucesso
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(evento) {

    // Não recarrega ao submeter
    evento.preventDefault()

    let valido = true

    if (nome.trim() === '') {
      setErroNome('Por favor, introduza o seu nome.')
      valido = false
    } else {
      setErroNome('')
    }

    // regex email -> texto@texto.texto
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email.trim() === '' || !formatoEmail.test(email)) {
      setErroEmail('Por favor, introduza um email válido.')
      valido = false
    } else {
      setErroEmail('')
    }

    if (assunto === '') {
      setErroAssunto('Por favor, selecione um assunto.')
      valido = false
    } else {
      setErroAssunto('')
    }

    if (mensagem.trim().length < 10) {
      setErroMensagem('Por favor, escreva uma mensagem (mínimo 10 caracteres).')
      valido = false
    } else {
      setErroMensagem('')
    }

    if (valido) {
      setEnviado(true)
    }
  }

  return (
    <>
      <div className="text-center py-5" style={{ marginTop: '56px', backgroundColor: 'var(--cor-texto)', borderBottom: '2px solid var(--cor-destaque)' }}>
        <div className="container">
          <h1 className="fw-normal text-white">Contacto e Reservas</h1>
          <p className="fst-italic" style={{ color: 'var(--cor-destaque)' }}>Estamos à sua espera em Bucelas</p>
        </div>
      </div>

      <main className="py-5">
        <div className="container">
          <div className="row g-5">

            {/* COLUNA ESQUERDA — Formulário */}
            <div className="col-lg-7">
              <span className="label-secao">Reserve a Sua Visita</span>
              <h2 className="mb-0">Fale Connosco</h2>
              <div className="linha-verde-esq"></div>

              {/* !enviado = mostra formulário . enviado = mostra mensagem sucesso */}
              {!enviado ? (

                <form onSubmit={handleSubmit} noValidate>

                  <div className="mb-3">
                    <label htmlFor="nome" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>
                      Nome Completo *
                    </label>
                    {/* is-invalid -> borda vermelha BS qdo há erro */}
                    <input
                      type="text"
                      className={`form-control ${erroNome ? 'is-invalid' : ''}`}
                      id="nome"
                      placeholder="O seu nome"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                    />
                    {erroNome && <span className="mensagem-erro visivel">{erroNome}</span>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${erroEmail ? 'is-invalid' : ''}`}
                      id="email"
                      placeholder="o.seu@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    {erroEmail && <span className="mensagem-erro visivel">{erroEmail}</span>}
                  </div>

                  {/* Tlf opcional sem validação */}
                  <div className="mb-3">
                    <label htmlFor="telefone" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefone"
                      placeholder="+351 9XX XXX XXX"
                      value={telefone}
                      onChange={e => setTelefone(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="assunto" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>
                      Assunto *
                    </label>
                    <select
                      className={`form-select ${erroAssunto ? 'is-invalid' : ''}`}
                      id="assunto"
                      value={assunto}
                      onChange={e => setAssunto(e.target.value)}
                    >
                      <option value="">— Selecione um assunto —</option>
                      <option value="prova">Prova de Arinto</option>
                      <option value="visita">Visita às Vinhas</option>
                      <option value="vindima">Workshop Vindima</option>
                      <option value="jantar">Jantar na Adega</option>
                      <option value="grupo">Visita de Grupo</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                    {erroAssunto && <span className="mensagem-erro visivel">{erroAssunto}</span>}
                  </div>

                  {/* Data e Pessoas - duas colunas BS */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="data" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>
                        Data Pretendida
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="data"
                        value={data}
                        onChange={e => setData(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="pessoas" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>
                        Nº de Pessoas
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="pessoas"
                        min="1"
                        max="50"
                        placeholder="Ex: 4"
                        value={pessoas}
                        onChange={e => setPessoas(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mensagem" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>
                      Mensagem *
                    </label>
                    <textarea
                      className={`form-control ${erroMensagem ? 'is-invalid' : ''}`}
                      id="mensagem"
                      rows="5"
                      placeholder="Conte-nos mais sobre o que procura..."
                      value={mensagem}
                      onChange={e => setMensagem(e.target.value)}
                    ></textarea>
                    {erroMensagem && <span className="mensagem-erro visivel">{erroMensagem}</span>}
                  </div>

                  <button type="submit" className="btn-quinta w-100 py-2">
                    Enviar Pedido de Reserva
                  </button>
                  <p className="text-muted small text-center mt-2">* Campos obrigatórios. Responderemos em 24 horas.</p>

                </form>

              ) : (

                // Substitui formulário depois da submissão
                <div className="alert alert-success text-center mt-3">
                  <i className="bi bi-check-circle fs-2 d-block mb-2"></i>
                  <h5>Pedido Enviado com Sucesso!</h5>
                  <p className="mb-0">Obrigado pelo seu interesse. Entraremos em contacto dentro de 24 horas para confirmar a sua reserva.</p>
                </div>

              )}
            </div>

            {/* COLUNA DIREITA - infos estáticas */}
            <div className="col-lg-5">
              <span className="label-secao">Onde Estamos</span>
              <h2 className="mb-0">Informações</h2>
              <div className="linha-verde-esq"></div>

              <div className="d-flex gap-3 mb-3">
                <i className="bi bi-geo-alt fs-4 flex-shrink-0" style={{ color: 'var(--cor-primaria)' }}></i>
                <div>
                  <strong className="small text-uppercase" style={{ letterSpacing: '0.05em' }}>Morada</strong>
                  <p className="text-muted small mb-0">Quinta da Azenha<br />Bucelas, 2670-000<br />Lisboa, Portugal</p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <i className="bi bi-telephone fs-4 flex-shrink-0" style={{ color: 'var(--cor-primaria)' }}></i>
                <div>
                  <strong className="small text-uppercase" style={{ letterSpacing: '0.05em' }}>Telefone</strong>
                  <p className="text-muted small mb-0">+351 219 000 000</p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <i className="bi bi-envelope fs-4 flex-shrink-0" style={{ color: 'var(--cor-primaria)' }}></i>
                <div>
                  <strong className="small text-uppercase" style={{ letterSpacing: '0.05em' }}>Email</strong>
                  <p className="text-muted small mb-0">visitas@quintaazenha.pt</p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <i className="bi bi-clock fs-4 flex-shrink-0" style={{ color: 'var(--cor-primaria)' }}></i>
                <div>
                  <strong className="small text-uppercase" style={{ letterSpacing: '0.05em' }}>Horário</strong>
                  <p className="text-muted small mb-0">Terça a Domingo: 10h–18h<br /><em>Encerrado às Segundas</em></p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-4">
                <i className="bi bi-car-front fs-4 flex-shrink-0" style={{ color: 'var(--cor-primaria)' }}></i>
                <div>
                  <strong className="small text-uppercase" style={{ letterSpacing: '0.05em' }}>Como Chegar</strong>
                  <p className="text-muted small mb-0">A 25km de Lisboa<br />A1 saída Bucelas ou A8<br />Estacionamento gratuito</p>
                </div>
              </div>

              <div className="p-3" style={{ backgroundColor: 'var(--cor-fundo)', borderLeft: '3px solid var(--cor-primaria)', border: '1px solid var(--cor-neutro)' }}>
                <strong className="small">Nota sobre os nossos vinhos</strong>
                <p className="small mb-0 mt-1 text-muted">Não fazemos venda online! Os vinhos da Quinta da Azenha estão disponíveis exclusivamente durante as visitas.</p>
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default Contacto