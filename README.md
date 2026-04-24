# Quinta da Azenha - React + Open-Meteo API

Projeto Final UC00617 | ATEC TPSI-CAS-0725 | Gonçalo Chora

---

## Sobre o Projeto

Este projeto é a conversão do site estático da Quinta da Azenha (desenvolvido no âmbito da UC00604), para uma aplicação React com Vite, com integração de uma API pública de meteorologia.

A ideia central é simples: a Quinta da Azenha é uma propriedade vitivinícola em Bucelas que recebe visitantes. Faz sentido mostrar a previsão do tempo para a semana, para que o visitante saiba o melhor momento para vir. A secção "A Semana na Vinha" consome dados reais da Open-Meteo API e apresenta os próximos 7 dias com temperatura, probabilidade de chuva e uma sugestão de atividade para cada dia.

---

## API Utilizada

**Open-Meteo** - https://open-meteo.com

- Gratuita, sem registo nem API key
- Endpoint: previsão diária para Bucelas (latitude 38.99, longitude -9.10)
- Dados utilizados: temperatura máxima e mínima, probabilidade de precipitação, código meteorológico (WMO)
- Os dados chegam como arrays paralelos e são transformados num array de objetos em `src/services/api.js`

---

## Tecnologias

- React 18 + Vite
- Bootstrap 5.3 + Bootstrap Icons
- React Router DOM
- Open-Meteo API (sem autenticação)

---

## Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.jsx       - barra de navegação (partilhada em todas as páginas)
│   ├── Footer.jsx       - rodapé (partilhado em todas as páginas)
│   └── DiaCard.jsx      - card de cada dia do tempo (componente filho)
├── pages/
│   ├── Home.jsx         - página inicial + secção da API
│   ├── Vinhos.jsx       - catálogo com filtro por tipo
│   ├── Experiencias.jsx - página de experiências
│   └── Contacto.jsx     - formulário de reserva com validação
├── services/
│   └── api.js           - fetch à Open-Meteo + transformação dos dados
├── App.jsx              - rotas com React Router
├── main.jsx             - ponto de entrada, imports do Bootstrap
└── style.css            - CSS personalizado (paleta da quinta, hero, FAQ)
```

---

## Como Executar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no browser
http://localhost:5173
```

---

## Funcionalidades

- Navegação entre páginas sem recarregar (React Router)
- Previsão do tempo em tempo real para Bucelas (Open-Meteo API)
- Estados de loading, erro e dados vazios na secção da API
- Filtro de vinhos por tipo (Branco / Tinto / Espumante) com useState
- FAQ com acordeão controlado por useState
- Formulário de contacto com validação de campos obrigatórios
- Ano do copyright calculado automaticamente no footer
- Design responsivo com Bootstrap 5

---

## Deploy

https://quinta-azenha-react.netlify.app/

---

*UC00617 - Projeto Final React + API | Gonçalo Chora | ATEC TPSI-CAS-0725 | 2026*
