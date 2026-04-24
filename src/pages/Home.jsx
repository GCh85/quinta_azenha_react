// Página inicial
// Tem estado para o FAQ, para a API, e chama o DiaCard

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { buscarClimasBucelas } from '../services/api'
import DiaCard from '../components/DiaCard'

function Home() {

  // FAQ - guarda índice da pergunta aberta (null = todas fechadas)
  const [faqAberto, setFaqAberto] = useState(null)

  // API - três estados: dados, loading e erro
  const [diasClima, setDiasClima] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  // [] vazio = executa só uma vez quando o componente aparece no ecrã
  useEffect(() => {
    async function carregarClima() {
      try {
        const dados = await buscarClimasBucelas()
        setDiasClima(dados)
      } catch (err) {
        setErro('Não foi possível carregar a previsão do tempo.')
      } finally {
        // finally corre sempre para desactivar o spinner
        setLoading(false)
      }
    }
    carregarClima()
  }, [])

  // Se pergunta aberta -> fecha (null). Se não, abre (guarda o índice)
  function toggleFaq(indice) {
    if (faqAberto === indice) {
      setFaqAberto(null)
    } else {
      setFaqAberto(indice)
    }
  }

  const perguntasFaq = [
    {
      pergunta: 'Quais são os horários de visita?',
      resposta: 'Estamos abertos de terça a domingo, das 10h às 18h. Recomendamos reserva prévia para garantir disponibilidade.'
    },
    {
      pergunta: 'É necessário fazer reserva?',
      resposta: 'Sim. Para garantir disponibilidade e uma experiência personalizada, pedimos que reserve com pelo menos 48 horas de antecedência.'
    },
    {
      pergunta: 'Aceitam grupos grandes?',
      resposta: 'Sim! Temos experiências especiais para grupos de 10 ou mais pessoas. Contacte-nos para um programa personalizado.'
    },
    {
      pergunta: 'Como chegar à Quinta da Azenha?',
      resposta: 'Estamos em Bucelas, a 25km de Lisboa. Fácil acesso pela A1 (saída Bucelas) ou A8. Enviaremos instruções com a confirmação da reserva.'
    },
    {
      pergunta: 'Os vinhos podem ser comprados na visita?',
      resposta: 'Sim! Os nossos vinhos estão disponíveis exclusivamente na quinta, durante as visitas. Não vendemos online - cada garrafa merece ser descoberta pessoalmente.'
    }
  ]

  return (
    <>
      {/* HERO - background com texto sobreposto pelo CSS (hero-section / hero-img / hero-texto) */}
      <div className="hero-section">
        <img src="/img/QtaAzenha.png" className="hero-img" alt="Vinhas da Quinta da Azenha em Bucelas" />
        <div className="hero-texto">
          <span className="label-secao" style={{ color: 'var(--cor-destaque)' }}>Bucelas · DOC Arinto</span>
          <h1 className="display-4 fw-bold mb-2">Raízes que Falam</h1>
          <div className="linha-verde"></div>
          <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Uma quinta que da uva faz mais do que vinho
          </p>
          <Link to="/experiencias" className="btn-quinta me-2">Ver Experiências</Link>
          <Link to="/vinhos" className="btn-quinta-outline" style={{ color: 'white', borderColor: 'white' }}>Descobrir Vinhos</Link>
        </div>
      </div>

      <main>

        {/* DESCOBRIR BUCELAS */}
        <section className="py-5 bg-white">
          <div className="container">
            <span className="label-secao text-center d-block">O Nosso Terroir</span>
            <h2 className="text-center mb-0">Descobrir Bucelas</h2>
            <div className="linha-verde"></div>
            <div className="row g-4 text-center">
              <div className="col-md-4">
                <i className="bi bi-geo-alt fs-1 mb-3 d-block" style={{ color: 'var(--cor-primaria)' }}></i>
                <h4>O Solo</h4>
                <p className="text-muted">Os solos argilo-calcários de Bucelas conferem aos vinhos uma mineralidade única - aquela frescura que persiste depois de engolir.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-sun fs-1 mb-3 d-block" style={{ color: 'var(--cor-primaria)' }}></i>
                <h4>O Clima</h4>
                <p className="text-muted">Invernos frios e verões ventosos. A influência do Atlântico, a 30km, traz frescura às noites - o segredo para a acidez viva dos nossos brancos.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-flower1 fs-1 mb-3 d-block" style={{ color: 'var(--cor-primaria)' }}></i>
                <h4>O Arinto</h4>
                <p className="text-muted">A casta rainha de Bucelas. O Arinto aqui produz vinhos que envelhecem décadas sem perder frescura - uma raridade num mundo de vinhos para beber jovens.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE A QUINTA */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="label-secao">A Nossa História</span>
                <h2 className="mb-0">Quinta da Azenha</h2>
                <div className="linha-verde-esq"></div>
                <p className="text-muted mb-3">
                  A Quinta da Azenha está localizada no coração de Bucelas e estende-se por uma área de 45 hectares, caracterizados por solos argilo-calcários únicos. A propriedade possui 37 hectares de vinhas, incluindo vinhas velhas com mais de 50 anos.
                </p>
                <p className="text-muted mb-4">
                  O nome "Azenha" - a antiga roda de pedra que moía o grão - é a memória viva de gerações que trabalharam esta terra. Hoje, esse mesmo engenho move a nossa paixão pelo vinho.
                </p>
                <div className="row text-center border-top pt-4">
                  <div className="col-4">
                    <h3 style={{ color: 'var(--cor-primaria)' }}>45ha</h3>
                    <small className="text-muted text-uppercase" style={{ letterSpacing: '0.1em' }}>Área Total</small>
                  </div>
                  <div className="col-4">
                    <h3 style={{ color: 'var(--cor-primaria)' }}>37ha</h3>
                    <small className="text-muted text-uppercase" style={{ letterSpacing: '0.1em' }}>Vinhas</small>
                  </div>
                  <div className="col-4">
                    <h3 style={{ color: 'var(--cor-primaria)' }}>+50</h3>
                    <small className="text-muted text-uppercase" style={{ letterSpacing: '0.1em' }}>Anos</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/img/QtaAzenha.png" className="img-fluid rounded shadow-sm" alt="Quinta da Azenha" />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIAS EM DESTAQUE */}
        <section className="py-5 bg-white">
          <div className="container">
            <span className="label-secao text-center d-block">O Que Fazemos</span>
            <h2 className="text-center mb-0">Experiências em Destaque</h2>
            <div className="linha-verde"></div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0">
                  <img src="/img/prova_vinhos.png" className="card-img-top" alt="Prova de Arinto" />
                  <div className="card-body">
                    <h5 className="card-title">Prova de Arinto</h5>
                    <p className="card-text text-muted small">Uma viagem pelos solos de Bucelas através dos nossos melhores Arintos.</p>
                    <Link to="/experiencias" className="btn-quinta-outline">Saber Mais</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0">
                  <img src="/img/QtaAzenha.png" className="card-img-top" alt="Visita às Vinhas" />
                  <div className="card-body">
                    <h5 className="card-title">Visita às Vinhas</h5>
                    <p className="card-text text-muted small">Passeio guiado pelas vinhas centenárias de Arinto em Bucelas.</p>
                    <Link to="/experiencias" className="btn-quinta-outline">Saber Mais</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0">
                  <img src="/img/jantar.png" className="card-img-top" alt="Jantar na Adega" />
                  <div className="card-body">
                    <h5 className="card-title">Jantar na Adega</h5>
                    <p className="card-text text-muted small">Menu tradicional harmonizado com os nossos vinhos, na sala da antiga azenha.</p>
                    <Link to="/experiencias" className="btn-quinta-outline">Saber Mais</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <Link to="/experiencias" className="btn-quinta">Ver Todas as Experiências</Link>
            </div>
          </div>
        </section>

        {/* A SEMANA NA VINHA - Open-Meteo API */}
        <section className="py-5">
          <div className="container">
            <span className="label-secao text-center d-block">Previsão do Tempo</span>
            <h2 className="text-center mb-0">A Semana na Vinha</h2>
            <p className="text-center text-muted small mt-2 mb-0">Bucelas · previsão em tempo real via Open-Meteo</p>
            <div className="linha-verde"></div>

            {/* 3 estados: loading, erro, sem dados */}
            {loading && (
              <div className="text-center py-4">
                <div className="spinner-border" role="status" style={{ color: 'var(--cor-primaria)' }}>
                  <span className="visually-hidden">A carregar...</span>
                </div>
                <p className="text-muted small mt-2">A carregar previsão para Bucelas...</p>
              </div>
            )}

            {erro && (
              <div className="alert alert-danger text-center">{erro}</div>
            )}

            {!loading && !erro && diasClima.length === 0 && (
              <p className="text-center text-muted">Sem dados disponíveis de momento.</p>
            )}

            {/* Dados carregados - um DiaCard por dia, dados passados via props */}
            {!loading && !erro && diasClima.length > 0 && (
              <div className="row g-3">
                {diasClima.map(dia => (
                  <div key={dia.data} className="col-md-6 col-lg-3">
                    <DiaCard dia={dia} />
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* FAQ - acordeão controlado por useState */}
        <section className="py-5">
          <div className="container">
            <span className="label-secao text-center d-block">Tem Dúvidas?</span>
            <h2 className="text-center mb-0">Perguntas Frequentes</h2>
            <div className="linha-verde"></div>
            <div className="mx-auto" style={{ maxWidth: '700px' }}>
              {perguntasFaq.map((item, indice) => (
                <div
                  key={indice}
                  className={`faq-item border-bottom ${faqAberto === indice ? 'aberto' : ''}`}
                >
                  <button
                    className="faq-pergunta btn btn-link text-decoration-none w-100 d-flex justify-content-between align-items-center py-3 px-0"
                    style={{ color: 'var(--cor-texto)' }}
                    onClick={() => toggleFaq(indice)}
                  >
                    {item.pergunta}
                    <span className="faq-icone fs-5">+</span>
                  </button>
                  <div className="faq-resposta">
                    <p className="text-muted pb-3">{item.resposta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-5 text-center" style={{ backgroundColor: 'var(--cor-texto)' }}>
          <div className="container">
            <span className="label-secao" style={{ color: 'var(--cor-destaque)' }}>Bucelas começa aqui</span>
            <h2 className="mb-3 text-white">Pronto para nos Visitar?</h2>
            <p className="mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Reserve a sua experiência e descubra porque Bucelas é a região de vinho branco mais especial de Portugal.
            </p>
            <Link to="/contacto" className="btn-quinta me-2">Fazer Reserva</Link>
            <Link to="/vinhos" className="btn-quinta-outline" style={{ color: 'white', borderColor: 'white' }}>Ver os Vinhos</Link>
          </div>
        </section>

      </main>
    </>
  )
}

export default Home