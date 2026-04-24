// traduz código da API em descrição e ícone BS (tabela WMO)
const weatherInfo = {
  0:  { descricao: 'Céu limpo',            icone: 'bi-sun' },
  1:  { descricao: 'Principalmente limpo', icone: 'bi-sun' },
  2:  { descricao: 'Parcialmente nublado', icone: 'bi-cloud-sun' },
  3:  { descricao: 'Nublado',              icone: 'bi-cloud' },
  45: { descricao: 'Nevoeiro',             icone: 'bi-cloud-haze' },
  48: { descricao: 'Nevoeiro',             icone: 'bi-cloud-haze' },
  51: { descricao: 'Chuvisco leve',        icone: 'bi-cloud-drizzle' },
  53: { descricao: 'Chuvisco',             icone: 'bi-cloud-drizzle' },
  55: { descricao: 'Chuvisco forte',       icone: 'bi-cloud-drizzle' },
  61: { descricao: 'Chuva leve',           icone: 'bi-cloud-rain' },
  63: { descricao: 'Chuva',               icone: 'bi-cloud-rain' },
  65: { descricao: 'Chuva forte',          icone: 'bi-cloud-rain-heavy' },
  71: { descricao: 'Neve leve',            icone: 'bi-cloud-snow' },
  73: { descricao: 'Neve',                icone: 'bi-cloud-snow' },
  75: { descricao: 'Neve forte',           icone: 'bi-cloud-snow' },
  80: { descricao: 'Aguaceiros',           icone: 'bi-cloud-rain' },
  81: { descricao: 'Aguaceiros',           icone: 'bi-cloud-rain' },
  82: { descricao: 'Aguaceiros fortes',    icone: 'bi-cloud-rain-heavy' },
  95: { descricao: 'Trovoada',             icone: 'bi-cloud-lightning-rain' },
}

// Recebe o código do tempo e temperatura máxima. Devolve sugestão de actividade
function sugerirAtividade(weatherCode, tempMax) {
  if (weatherCode === 0 && tempMax >= 20) return 'Dia ideal para visita às vinhas'
  if (weatherCode <= 2 && tempMax >= 15) return 'Bom dia para passeio pela quinta'
  if (weatherCode === 3) return 'Dia tranquilo para visitar a adega'
  if (weatherCode >= 61 && weatherCode <= 82) return 'Dia perfeito para prova de vinhos'
  if (weatherCode === 95) return 'Ideal para jantar na adega'
  return 'Venha conhecer a quinta'
}

// Função chamada pelo useEffect do Home.jsx
export async function buscarClimasBucelas() {

  const url =
    'https://api.open-meteo.com/v1/forecast' +
    '?latitude=38.99' +           // coordenadas de Bucelas
    '&longitude=-9.10' +
    '&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code' +
    '&timezone=Europe%2FLisbon' +
    '&forecast_days=7'

  const resposta = await fetch(url)
  const dados = await resposta.json()

  // A API devolve arrays paralelos
  // .map transforma num array de 7 objetos, um por dia
  const diasClima = dados.daily.time.map((data, indice) => {

    const code = dados.daily.weather_code[indice]

    // Se o código não existir na tabela, usa valores por defeito
    const info = weatherInfo[code] || { descricao: 'Tempo variável', icone: 'bi-thermometer' }
    const tempMax = dados.daily.temperature_2m_max[indice]

    return {
      data: data,
      tempMax: tempMax,
      tempMin: dados.daily.temperature_2m_min[indice],
      precipitacao: dados.daily.precipitation_probability_max[indice],
      weatherCode: code,
      descricao: info.descricao,
      icone: info.icone,
      sugestao: sugerirAtividade(code, tempMax)
    }
  })

  return diasClima
}