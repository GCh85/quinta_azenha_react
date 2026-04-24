// Catálogo de vinhos com filtro por tipo

import { useState } from 'react'
import { Link } from 'react-router-dom'

function Vinhos() {

  // Guarda filtro activo - começa em 'todos'
  const [filtroAtivo, setFiltroAtivo] = useState('todos')

  // Array de vinhos - cards gerados com .map
  const vinhos = [
    {
      id: 2,
      nome: 'Grande Reserva Vinhas Velhas',
      tipo: 'Branco',
      ano: '2021',
      alcool: '13%',
      imagem: '/img/QtaAzenhaGrdReserva.png',
      descricao: 'Das vinhas mais antigas da Quinta, este Arinto revela a expressão máxima do terroir de Bucelas. Notas cítricas, mineral e floral, com uma acidez cristalina que promete longa evolução.',
      docura: 5,
      acidez: 92,
      corpo: 70,
      avaliacao: '4.8',
      avaliacoes: 15,
      harmoniza: 'Peixe grelhado · Marisco · Queijo fresco',
      badge: { texto: 'Branco', cor: '#d4edda', corTexto: '#155724' }
    },
    {
      id: 3,
      nome: 'Grande Reserva Magnum',
      tipo: 'Tinto',
      ano: '2014',
      alcool: '14%',
      imagem: '/img/QtaAzenha_Magnum2014.png',
      descricao: 'Uma raridade da Quinta — o único tinto da gama. Blend de castas tintas do Tejo, envelhecido 18 meses em barricas de carvalho francês. Taninos sedosos, fruta madura e final longo.',
      docura: 20,
      acidez: 65,
      corpo: 90,
      avaliacao: '4.9',
      avaliacoes: 8,
      harmoniza: 'Borrego assado · Caça · Queijo curado',
      badge: { texto: 'Tinto', cor: '#f8d7da', corTexto: '#721c24' }
    },
    {
      id: 4,
      nome: 'Reserva Arinto-Chardonnay',
      tipo: 'Espumante',
      ano: '2019',
      alcool: '12%',
      imagem: '/img/QtaAzenhaBruto_2019.png',
      descricao: 'A frescura do Arinto de Bucelas encontra a elegância do Chardonnay. Borbulhas finas, aroma cítrico e floral, final persistente.',
      docura: 10,
      acidez: 90,
      corpo: 50,
      avaliacao: '4.7',
      avaliacoes: 9,
      harmoniza: 'Sushi · Ostras',
      badge: { texto: 'Espumante', cor: '#d1ecf1', corTexto: '#0c5460' }
    },
    {
      id: 5,
      nome: 'Trilogia de Arintos — Pelicular',
      tipo: 'Branco',
      ano: '2019',
      alcool: '13.5%',
      imagem: '/img/QtaAzenha2019.png',
      descricao: 'Edição numerada de 3000 garrafas. Maceração pelicular transforma o Arinto num branco âmbar, com textura e profundidade únicas.',
      docura: 25,
      acidez: 80,
      corpo: 70,
      avaliacao: '4.6',
      avaliacoes: 7,
      harmoniza: 'Especiarias · Cozinha asiática',
      badge: { texto: 'Branco', cor: '#d4edda', corTexto: '#155724' },
      badgeExtra: { texto: 'Ed. Limitada', cor: 'var(--cor-destaque)', corTexto: 'var(--cor-texto)' }
    }
  ]

  // Se filtroAtivo = todos, mostra tudo . senão filtra por tipo
  const vinhosFiltrados = filtroAtivo === 'todos'
    ? vinhos
    : vinhos.filter(vinho => vinho.tipo === filtroAtivo)

  return (
    <>
      <div className="text-center py-5" style={{ marginTop: '56px', backgroundColor: 'var(--cor-texto)', borderBottom: '2px solid var(--cor-destaque)' }}>
        <div className="container">
          <h1 className="fw-normal text-white">Os Nossos Vinhos</h1>
          <p className="fst-italic" style={{ color: 'var(--cor-destaque)' }}>Arinto DOC Bucelas — a casta que define uma região</p>
        </div>
      </div>

      <main>

        {/* VINHO EM DESTAQUE - card fixo com borda dourada */}
        <section className="py-5 bg-white">
          <div className="container">
            <span className="label-secao text-center d-block">Jóia da Quinta</span>
            <h2 className="text-center mb-0">Vinho em Destaque</h2>
            <div className="linha-verde"></div>

            <div className="card shadow-sm mb-5" style={{ border: '1px solid var(--cor-destaque)' }}>
              <div className="row g-0">
                <div className="col-lg-5">
                  <img src="/img/QtaAzenhaTardia_2009.png"
                    className="img-fluid h-100"
                    style={{ objectFit: 'cover' }}
                    alt="Colheita Tardia 2009" />
                </div>
                <div className="col-lg-7">
                  <div className="card-body p-4">
                    <span className="badge mb-2" style={{ backgroundColor: 'var(--cor-destaque)', color: 'var(--cor-texto)' }}>
                      Recomendação do Enólogo
                    </span>
                    <h3 className="card-title">Colheita Tardia Vinhas Velhas</h3>
                    <p className="fst-italic text-muted mb-3">"Uma raridade que desafia o tempo — dez anos de paciência numa garrafa."</p>
                    <p className="text-muted">Nascido nas vinhas mais antigas da Quinta, este Arinto passou dez anos em barricas de carvalho francês. Cor âmbar profundo, aromas de frutos secos e mel.</p>

                    <div className="mt-3">
                      <small className="text-muted">Doçura</small>
                      <div className="progress mb-2" style={{ height: '5px' }}>
                        <div className="progress-bar" style={{ width: '65%', backgroundColor: 'var(--cor-destaque)' }}></div>
                      </div>
                      <small className="text-muted">Acidez</small>
                      <div className="progress mb-2" style={{ height: '5px' }}>
                        <div className="progress-bar" style={{ width: '80%', backgroundColor: 'var(--cor-destaque)' }}></div>
                      </div>
                      <small className="text-muted">Corpo</small>
                      <div className="progress" style={{ height: '5px' }}>
                        <div className="progress-bar" style={{ width: '85%', backgroundColor: 'var(--cor-destaque)' }}></div>
                      </div>
                    </div>

                    <div className="mt-3 d-flex align-items-center gap-2">
                      <span className="avaliacao-estrelas">★★★★★</span>
                      <span className="avaliacao-texto">4.9 (12 avaliações)</span>
                    </div>

                    <p className="mt-3 mb-1 small text-muted"><strong>Harmoniza com:</strong></p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge rounded-pill border" style={{ color: 'var(--cor-texto-leve)', borderColor: 'var(--cor-neutro)', fontWeight: 400 }}>Queijo da Serra</span>
                      <span className="badge rounded-pill border" style={{ color: 'var(--cor-texto-leve)', borderColor: 'var(--cor-neutro)', fontWeight: 400 }}>Sobremesas de Ovo</span>
                      <span className="badge rounded-pill border" style={{ color: 'var(--cor-texto-leve)', borderColor: 'var(--cor-neutro)', fontWeight: 400 }}>Chocolate Negro</span>
                    </div>

                    <p className="small text-muted mt-3">Arinto 100% · DOC Bucelas · 2009</p>
                    <Link to="/contacto" className="btn-quinta mt-2 d-inline-block">Descobrir na Quinta</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO COM FILTRO */}
        <section className="py-5">
          <div className="container">
            <span className="label-secao text-center d-block">Catálogo Completo</span>
            <h2 className="text-center mb-0">A Nossa Gama</h2>
            <div className="linha-verde"></div>

            {/* setFiltroAtivo atualiza estado e o array filtra automaticamente
                classe active é aplicada ao botão com valor = filtroAtivo */}
            <div className="d-flex gap-2 justify-content-center flex-wrap mb-4">
              {['todos', 'Branco', 'Tinto', 'Espumante'].map(tipo => (
                <button
                  key={tipo}
                  className={`btn btn-sm btn-filtro ${filtroAtivo === tipo ? 'active' : ''}`}
                  onClick={() => setFiltroAtivo(tipo)}
                >
                  {tipo === 'todos' ? 'Todos' : tipo}
                </button>
              ))}
            </div>

            {/* Cards gerados por vinhosFiltrados */}
            <div className="row g-4">
              {vinhosFiltrados.map(vinho => (
                <div key={vinho.id} className="col-md-6 col-lg-3">
                  <div className="card h-100 shadow-sm border-0">
                    <img src={vinho.imagem} className="card-img-vinho" alt={vinho.nome} />
                    <div className="card-body d-flex flex-column">

                      <div className="mb-2">
                        <span className="badge me-1" style={{ backgroundColor: vinho.badge.cor, color: vinho.badge.corTexto, fontWeight: 400 }}>
                          {vinho.badge.texto}
                        </span>
                        {/* badgeExtra só para Trilogia de Arintos */}
                        {vinho.badgeExtra && (
                          <span className="badge" style={{ backgroundColor: vinho.badgeExtra.cor, color: vinho.badgeExtra.corTexto, fontWeight: 400 }}>
                            {vinho.badgeExtra.texto}
                          </span>
                        )}
                      </div>

                      <h5 className="card-title">{vinho.nome}</h5>
                      <p className="card-text text-muted small flex-grow-1">{vinho.descricao}</p>

                      <div className="mt-2">
                        <small className="text-muted">Doçura</small>
                        <div className="progress mb-1" style={{ height: '4px' }}>
                          <div className="progress-bar" style={{ width: `${vinho.docura}%`, backgroundColor: 'var(--cor-destaque)' }}></div>
                        </div>
                        <small className="text-muted">Acidez</small>
                        <div className="progress mb-1" style={{ height: '4px' }}>
                          <div className="progress-bar" style={{ width: `${vinho.acidez}%`, backgroundColor: 'var(--cor-destaque)' }}></div>
                        </div>
                        <small className="text-muted">Corpo</small>
                        <div className="progress" style={{ height: '4px' }}>
                          <div className="progress-bar" style={{ width: `${vinho.corpo}%`, backgroundColor: 'var(--cor-destaque)' }}></div>
                        </div>
                      </div>

                      <div className="mt-2 d-flex align-items-center gap-1">
                        <span className="avaliacao-estrelas">★★★★★</span>
                        <span className="avaliacao-texto">{vinho.avaliacao} ({vinho.avaliacoes} avaliações)</span>
                      </div>

                      <div className="mt-2">
                        <small className="text-muted">{vinho.harmoniza}</small>
                      </div>

                      <small className="text-muted mt-2">{vinho.badge.texto} · {vinho.ano} · {vinho.alcool}</small>
                      <Link to="/contacto" className="btn-quinta-outline mt-3 text-center">Descobrir na Quinta</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
    </>
  )
}

export default Vinhos