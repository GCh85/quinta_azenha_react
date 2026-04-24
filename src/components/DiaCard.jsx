// Componente filho - recebe objeto dia via props e desenha o card

function DiaCard({ dia }) {

  // T12:00:00 evita desfasamento de fuso horário que fazia aparecer o dia errado
  const dataFormatada = new Date(dia.data + 'T12:00:00').toLocaleDateString('pt-PT', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  })

  // Fundo diferente consoante o tempo: sol=amarelo, chuva=azul, resto=cinza
  function corFundo(weatherCode) {
    if (weatherCode === 0 || weatherCode === 1) return '#fffbeb'
    if (weatherCode >= 61 && weatherCode <= 82) return '#eff6ff'
    return '#f8f9fa'
  }

  return (
    <div
      className="card h-100 border"
      style={{ backgroundColor: corFundo(dia.weatherCode), borderColor: 'var(--cor-neutro)' }}
    >
      <div className="card-body text-center d-flex flex-column">

        <p className="small text-uppercase fw-bold mb-1" style={{ letterSpacing: '0.1em', color: 'var(--cor-texto-leve)' }}>
          {dataFormatada}
        </p>

        {/* Nome da classe vem de api.js (bi-sun) */}
        <i
          className={`bi ${dia.icone} my-2`}
          style={{ fontSize: '2.5rem', color: 'var(--cor-primaria)' }}
        ></i>

        <p className="small mb-2" style={{ color: 'var(--cor-texto-leve)' }}>
          {dia.descricao}
        </p>

        {/* Máxima em destaque, mínima em cor secundária */}
        <div className="d-flex justify-content-center gap-3 mb-2">
          <span className="fw-bold" style={{ color: 'var(--cor-texto)' }}>
            {dia.tempMax}°
          </span>
          <span style={{ color: 'var(--cor-texto-leve)' }}>
            {dia.tempMin}°
          </span>
        </div>

        <div className="mb-2">
          <div className="d-flex justify-content-between mb-1">
            <small style={{ color: 'var(--cor-texto-leve)' }}>
              <i className="bi bi-droplet me-1"></i>Chuva
            </small>
            <small style={{ color: 'var(--cor-texto-leve)' }}>
              {dia.precipitacao}%
            </small>
          </div>
          {/* Azul se probabilidade alta, verde se baixa */}
          <div className="progress" style={{ height: '4px' }}>
            <div
              className="progress-bar"
              style={{
                width: `${dia.precipitacao}%`,
                backgroundColor: dia.precipitacao > 50
                  ? '#3b82f6'
                  : 'var(--cor-primaria)'
              }}
            ></div>
          </div>
        </div>

        {/* mt-auto empurra a sugestão para o fundo do card independentemente da altura */}
        <div className="mt-auto pt-2 border-top">
          <small style={{ color: 'var(--cor-primaria)', fontStyle: 'italic' }}>
            <i className="bi bi-info-circle me-1"></i>
            {dia.sugestao}
          </small>
        </div>

      </div>
    </div>
  )
}

export default DiaCard