// Página estática sem API nem estado
// Arrays locais para dados. Cards gerados com .map()

import { Link } from 'react-router-dom'

function Experiencias() {

  // Array de experiencias para nao repetir HTML em cada card
  const experiencias = [
    {
      id: 1,
      nome: 'Prova de Arinto',
      icone: 'bi-cup',
      descricao: 'Uma viagem pelos solos de Bucelas através dos nossos melhores Arintos. Aprenda a distinguir a mineralidade calcária e a frescura atlântica desta casta única.',
      duracao: '1h30',
      pessoas: 'Até 20 pessoas',
      preco: '25€ / pessoa',
      imagem: '/img/prova_vinhos.png',
      epoca: null
    },
    {
      id: 2,
      nome: 'Visita às Vinhas',
      icone: 'bi-tree',
      descricao: 'Passeio guiado pelas vinhas centenárias de Arinto. Conheça os solos calcários, as castas e a história desta terra que produz vinhos únicos.',
      duracao: '1h',
      pessoas: 'Até 15 pessoas',
      preco: '15€ / pessoa',
      imagem: '/img/QtaAzenha.png',
      epoca: null
    },
    {
      id: 3,
      nome: 'Workshop Vindima',
      icone: 'bi-scissors',
      descricao: 'Participe na colheita manual das uvas Arinto. Do corte ao lagar — uma experiência física e sensorial impossível de replicar.',
      duracao: '3h',
      pessoas: 'Até 12 pessoas',
      preco: '40€ / pessoa',
      imagem: '/img/prova_vinhos.png',
      epoca: 'Set / Out'
    },
    {
      id: 4,
      nome: 'Jantar na Adega',
      icone: 'bi-moon-stars',
      descricao: 'Menu tradicional português harmonizado com os nossos vinhos, na sala da antiga azenha com a roda de pedra iluminada como pano de fundo.',
      duracao: '2h30',
      pessoas: 'Até 10 pessoas',
      preco: '60€ / pessoa',
      imagem: '/img/jantar.png',
      epoca: null
    }
  ]

  // Array "O Que Inclui" pelo mesmo motivo
  const includes = [
    { icone: 'bi-translate', titulo: 'Idiomas', texto: 'Visitas disponíveis em Português e Inglês' },
    { icone: 'bi-car-front', titulo: 'Estacionamento', texto: 'Estacionamento gratuito na Quinta' },
    { icone: 'bi-calendar-check', titulo: 'Reserva', texto: 'Reserve com 48h de antecedência' },
    { icone: 'bi-heart', titulo: 'Grupos', texto: 'Programas personalizados para grupos' }
  ]

  return (
    <>
      <div className="text-center py-5" style={{ marginTop: '56px', backgroundColor: 'var(--cor-texto)', borderBottom: '2px solid var(--cor-destaque)' }}>
        <div className="container">
          <h1 className="fw-normal text-white">Experiências na Quinta</h1>
          <p className="fst-italic" style={{ color: 'var(--cor-destaque)' }}>Momentos que ficam na memória — e no palato</p>
        </div>
      </div>

      <main>

        {/* CARDS DE EXPERIÊNCIAS */}
        <section className="py-5">
          <div className="container">
            <span className="label-secao text-center d-block">O Que Fazemos</span>
            <h2 className="text-center mb-0">Escolha a Sua Experiência</h2>
            <div className="linha-verde"></div>

            <div className="row g-4">
              {experiencias.map(exp => (
                <div key={exp.id} className="col-md-6 col-lg-3">
                  <div className="card h-100 shadow-sm border-0">
                    <img src={exp.imagem} className="card-img-top" alt={exp.nome} />
                    <div className="card-body d-flex flex-column text-center">
                      <i className={`bi ${exp.icone} fs-1 mb-3 d-block`} style={{ color: 'var(--cor-primaria)' }}></i>
                      <h5 className="card-title">{exp.nome}</h5>
                      <p className="card-text text-muted small flex-grow-1">{exp.descricao}</p>

                      <div className="mt-auto border-top pt-3">
                        <p className="small text-muted mb-1">
                          <i className="bi bi-clock me-1"></i>Duração: {exp.duracao}
                        </p>
                        <p className="small text-muted mb-1">
                          <i className="bi bi-people me-1"></i>{exp.pessoas}
                        </p>
                        {/* época só existe no Workshop Vindima, os outros têm null */}
                        {exp.epoca && (
                          <p className="small text-muted mb-1">
                            <i className="bi bi-calendar3 me-1"></i>{exp.epoca}
                          </p>
                        )}
                        <p className="small mb-3" style={{ color: 'var(--cor-destaque)', fontWeight: 500 }}>
                          <i className="bi bi-currency-euro me-1"></i>{exp.preco}
                        </p>
                        <Link to="/contacto" className="btn-quinta w-100 text-center d-block">Reservar</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE INCLUI */}
        <section className="py-5 bg-white">
          <div className="container">
            <span className="label-secao text-center d-block">Informação</span>
            <h2 className="text-center mb-0">O Que Inclui</h2>
            <div className="linha-verde"></div>

            <div className="row g-4 text-center">
              {includes.map((item, indice) => (
                <div key={indice} className="col-md-3">
                  <i className={`bi ${item.icone} fs-1 mb-3 d-block`} style={{ color: 'var(--cor-primaria)' }}></i>
                  <h5>{item.titulo}</h5>
                  <p className="text-muted small">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-5 text-center" style={{ backgroundColor: 'var(--cor-texto)' }}>
          <div className="container">
            <h2 className="mb-3 text-white">Faça já a sua reserva!</h2>
            <p className="mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>Viva uma experiência inesquecível</p>
            <Link to="/contacto" className="btn-quinta">Fazer Reserva</Link>
          </div>
        </section>

      </main>
    </>
  )
}

export default Experiencias