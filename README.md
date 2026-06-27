# 🦅 CRK Nexus - Plataforma de Presença Digital & Estratégia

![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=flat&logo=greensock&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.x-0055FF?style=flat&logo=framer&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r184-black?style=flat&logo=three.js&logoColor=white)

> **Website premium** desenvolvido para a **CRK Nexus**. O objetivo é demonstrar uma presença digital de alto impacto que une design minimalista (estética dark/glassmorphism), animações interativas e de alta performance, e uma estrutura de componentes modular e escalável.

---

## 📋 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Arquitetura e Estrutura](#-arquitetura-e-estrutura)
- [Implementação de Animações](#-implementação-de-animações)
- [Lógica e Estado Interno](#-lógica-e-estado-interno)
- [Como Instalar e Rodar](#️-como-instalar-e-rodar)
- [Diferenciais Técnicos](#-diferenciais-têcnicos)
- [Roadmap Futuro](#-roadmap-futuro)

---

## 📖 Sobre o Projeto

A **CRK Nexus** não se posiciona como uma agência comum, mas sim como um parceiro estratégico focado em gerar clareza, unir tecnologia de ponta e execução precisa para impulsionar negócios no ambiente digital.

O website foi projetado com uma interface premium e extremamente moderna, destacando-se pela fluidez visual. Ele é composto por seções dinâmicas que contam a história da marca, explicam seus serviços de forma envolvente, demonstram casos práticos com transações de estado suaves e mostram a metodologia de processo da empresa através de uma linha conectora animada de acordo com o scroll.

### A Equipe

O projeto e a marca são liderados por:
*   **João Victor** — Desenvolvimento & tecnologia (*"Estratégia transformada em código"*).
*   **Jamerson Marques** — Design, marketing & social media (*"Marcas com direção, presença e propósito"*).

---

## ✅ Funcionalidades

| Módulo / Seção | Descrição |
|----------------|-----------|
| 🦅 **Identidade Visual & Intro** | Intro de marca animada (`BrandIntro`) e logotipo customizado SVG (`EagleLogo`). |
| 🌌 **Hero Section** | Layout grid 1.1fr/0.9fr, campo de partículas canvas iterativo, modelo 3D dinâmico e scroll indicator com bounce. |
| 👁️ **Filosofia (Sobre)** | Apresentação institucional com watermarks e perfis profissionais interativos (João Victor & Jamerson Marques) com abertura em drawer lateral e tabs de competências. |
| ⚙️ **Serviços** | Grid 2×2 apresentando as quatro principais frentes de atuação com cards interativos. |
| 📈 **Cases de Sucesso** | Navegação interativa com abas animadas via Framer Motion, exibindo desafios, soluções, fluxos de dados e métricas reais de performance. |
| 🔄 **Processo Metodológico** | Linha do tempo de 5 passos conectada por uma linha SVG animada que preenche gradualmente conforme a visualização na tela. |
| 📊 **Métricas Sociais** | Contadores de impacto que animam incrementalmente de forma suave. |
| 💬 **Botão de WhatsApp** | Acesso rápido e direto via floating button configurado para o canal oficial de atendimento. |

---

## 🛠️ Tecnologias Utilizadas

### Core
*   **React 19.x** & **TypeScript** (Interface & Typings)
*   **Vite 7.x** (Vite Dev Server & Bundler)
*   **Tailwind CSS 3.4.x** (Design System com Tema Customizado e Utilidades de Animação)

### Animações & Gráficos
*   **GSAP 3.15.x** (Animação de paths SVG complexos com ScrollTrigger)
*   **Framer Motion 12.x** (Entradas de seção, hovers dinâmicos, transições de estado de abas e overlays)
*   **Three.js** (Exibição e manipulação do modelo 3D interativo)

### Ícones & Tipografia
*   **Lucide React 0.562.0** (Biblioteca de ícones modernos)
*   **@fontsource/inter** & **@fontsource/space-grotesk** (Fontes profissionais integradas localmente)

---

## 📁 Arquitetura e Estrutura

O projeto é dividido em uma estrutura modular focada em componentização limpa e separação de responsabilidades:

```
Projeto Site CRK Nexus/
├── app/                        # Diretório principal da aplicação
│   ├── public/                 # Arquivos públicos e estáticos (favicon, logos, modelos 3D GLB)
│   ├── src/
│   │   ├── assets/             # Imagens da equipe e recursos estáticos locais
│   │   ├── components/         # Componentes compartilhados e de layout
│   │   │   ├── ui/             # Componentes base construídos sob medida (shadcn/ui base)
│   │   │   ├── Navbar.tsx      # Barra de navegação com comportamento scroll-aware
│   │   │   ├── MobileMenu.tsx  # Overlay de navegação móvel
│   │   │   ├── Footer.tsx      # Rodapé estruturado em colunas
│   │   │   ├── MetricCounter.tsx# Elemento contador incremental animado
│   │   │   └── ...             # Outros componentes (ParticleField, EagleLogo, etc.)
│   │   ├── sections/           # Seções principais de conteúdo da Landing Page
│   │   │   ├── HeroSection.tsx # Seção inicial com partículas, textos animados e 3D
│   │   │   ├── AboutSection.tsx# Nossa Filosofia e detalhes da equipe
│   │   │   ├── ServicesSection.tsx# Grid de serviços
│   │   │   ├── ProcessSection.tsx # Metodologia passo a passo
│   │   │   ├── CasesSection.tsx   # Casos de uso e histórias de sucesso
│   │   │   └── CtaSection.tsx     # Chamada para ação final com branding
│   │   ├── hooks/              # Custom hooks reutilizáveis (useCountUp, useScrolled)
│   │   ├── lib/                # Arquivos utilitários (integrações de chat, tailwind utilities)
│   │   ├── App.tsx             # Arquivo raiz organizador das seções e navegação fluida
│   │   ├── index.css           # Estilos globais e injeções Tailwind CSS
│   │   └── main.tsx            # Ponto de entrada do React
│   ├── tailwind.config.js      # Configuração customizada do Tailwind CSS
│   └── vite.config.ts          # Configuração do Vite Bundler
└── tech-spec.md                # Especificação técnica original do projeto
```

---

## ⚡ Implementação de Animações

| Animação | Biblioteca | Abordagem Técnica | Complexidade |
|----------|------------|-------------------|--------------|
| **Navbar Scroll State** | CSS Transition + React Hook | O hook `useScrolled` altera classes baseadas no scroll (> 80px) com transição de 0.4s. | Baixa |
| **Partículas em Parallax** | Canvas API (Custom) | Sistema customizado de 80 partículas flutuantes com movimento senoidal e pausado via `IntersectionObserver` quando fora de tela. | **Alta** |
| **Headline Stagger** | Framer Motion | Animação em cascata dos títulos principais, separando em linhas/palavras para efeito cinemático. | Média |
| **Contador Incremental** | Custom Hook (`useCountUp`) | Animação suave com `requestAnimationFrame` aplicando easing do tipo *easeOutCubic* ao entrar na viewport. | **Alta** |
| **SVG Conector de Processo**| GSAP + ScrollTrigger | Path SVG animado usando `strokeDasharray` e `strokeDashoffset` variando de comprimento total a 0 no scroll. | **Alta** |
| **Abas dos Cases** | Framer Motion | Animação física de transição das abas e alteração de painéis através de `AnimatePresence`. | Média |

---

## ⚙️ Lógica e Estado Interno

### 1. Partículas (Canvas)
O componente `ParticleField` renderiza um canvas de tela cheia. Para otimizar o uso da CPU e bateria, a renderização utiliza `requestAnimationFrame` combinado com um `IntersectionObserver` que congela os cálculos quando a seção do Hero está oculta do usuário.

### 2. Contador Incremental
O hook `useCountUp` realiza cálculos matemáticos de easing:
$$\text{f}(t) = 1 - (1 - t)^3$$
Isso garante uma desaceleração natural ao se aproximar do número final de cada métrica exibida na tela.

### 3. SVG Conector (Processo)
Uma linha SVG é desenhada ligando cada passo da seção de processos. Seu progresso de traçado acompanha dinamicamente a rolagem do usuário na página de forma responsiva, utilizando os limites físicos calculados em tempo real do container.

---

## 🚀 Como Instalar e Rodar

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
*   [Node.js](https://nodejs.org/) (Versão recomendada: **20.x** ou superior)
*   Gerenciador de pacotes de sua preferência (`npm`, `yarn` ou `pnpm`)

### Passo a Passo

```bash
# 1. Entre na pasta do projeto
cd "Projeto Site CRK Nexus"

# 2. Acesse a pasta da aplicação
cd app

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento local
npm run dev
```

Após iniciar, acesse o endereço gerado pelo Vite (normalmente [http://localhost:5173](http://localhost:5173)) em seu navegador.

### Scripts Disponíveis

Na pasta `app/`, você pode rodar os seguintes comandos:
*   `npm run dev`: Inicia o servidor local de desenvolvimento.
*   `npm run build`: Compila e gera a build de produção otimizada na pasta `/dist`.
*   `npm run lint`: Executa a verificação estática do código com ESLint.
*   `npm run preview`: Inicializa um servidor local para visualizar a build de produção gerada.

---

## ⭐ Diferenciais Técnicos

*   **Custom Build Puro:** Design 100% customizado sem a necessidade de componentes de terceiros genéricos pré-estilizados.
*   **Otimização de Performance:** Canvas de partículas inteligente que pausa a execução e animações desabilitadas automaticamente quando o usuário ativa o modo de movimentos reduzidos do sistema operacional (`prefers-reduced-motion`).
*   **Micro-interações:** Efeitos de hover extremamente fluidos, cursores customizados e transições suaves de elementos ativos.
*   **Layout Mobile-Adaptativo:** Implementado com foco em breakpoints críticos (1024px e 768px), assegurando visualização impecável tanto em computadores quanto em celulares e tablets.

---

*Desenvolvido por CRK Nexus — 2026*
