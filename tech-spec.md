# crknexus — Tech Spec

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `framer-motion` | ^11.0 | Animações de entrada (fade-up, stagger), animações de hover, scroll indicator bounce |
| `gsap` | ^3.12 | Linha conectora SVG stroke-dashoffset, animações complexas de timeline |
| `lucide-react` | ^0.400 | Ícones (ChevronDown, Mail, Instagram, Linkedin, Menu, X) |
| `@fontsource/inter` | ^5.0 | Fonte Inter (display) |
| `@fontsource/space-grotesk` | ^5.0 | Fonte Space Grotesk (labels mono-style) |

**Nota:** Não há necessidade de componentes shadcn/ui. O design é 100% custom com cards, botões e layout próprios. Nenhum padrão UI complexo (formulários, dialogs, tables, etc.) é requerido.

---

## Component Inventory

### Layout

| Component | Source | Reutilização |
|-----------|--------|--------------|
| `Navbar` | Custom | Único — scroll-aware com dois estados |
| `Footer` | Custom | Único — grid 4 colunas |

### Sections

| Component | Source | Notas |
|-----------|--------|-------|
| `HeroSection` | Custom | Grid 1.1fr/0.9fr, partículas canvas, imagem com máscara |
| `AboutSection` | Custom | Texto centralizado com watermark |
| `ServicesSection` | Custom | Grid 2×2 de cards |
| `ProcessSection` | Custom | 5 steps com SVG conector animado |
| `NumbersSection` | Custom | Grid 4 colunas, contadores animados |
| `CtaSection` | Custom | Gradient radial, watermark águia |

### Reusable Components

| Component | Source | Onde é usado |
|-----------|--------|--------------|
| `SectionTag` | Custom | Todas as seções — label uppercase Space Grotesk |
| `ServiceCard` | Custom | ServicesSection ×4 |
| `ProcessStep` | Custom | ProcessSection ×5 |
| `MetricCounter` | Custom | NumbersSection ×4 — contador animado |
| `ParticleField` | Custom | HeroSection — canvas de partículas |
| `EagleLogo` | Custom (SVG) | Navbar, Footer, Watermarks em About e CTA |
| `MobileMenu` | Custom | Navbar — menu hamburger para mobile |

### Hooks

| Hook | Propósito |
|------|-----------|
| `useScrolled` | Detecta scroll > 80px para navbar |
| `useInView` | Wrapper do IntersectionObserver para animações de entrada |
| `useCountUp` | Animação de contador incremental com easing |

---

## Animation Implementation

| Animação | Biblioteca | Abordagem | Complexidade |
|----------|-----------|-----------|--------------|
| Navbar scroll state | CSS + hook | `useScrolled` toggla classe, CSS transition 0.4s | Low |
| Hero tag fade-in | Framer Motion | `motion.div` com opacity 0→1, delay 0.1s | Low |
| Hero headline stagger | Framer Motion | `motion.div` por linha, staggerChildren 0.2s | Medium |
| Hero subtítulo fade-up | Framer Motion | `motion.p` com y: 20→0 + opacity | Low |
| Hero imagem slide-in | Framer Motion | `motion.div` com x: 40→0 + opacity, delay 0.3s | Low |
| Partículas parallax | Canvas API | Custom canvas com 80 dots, requestAnimationFrame, movimento senoidal lento | **🔒 High** |
| Scroll indicator bounce | Framer Motion | `motion.div` com y: [0, 8, 0], repeat Infinity, duration 1.5s | Low |
| Seção Sobre fade-up | Framer Motion | `whileInView` com y: 30→0 + opacity, stagger 0.15s | Medium |
| Service cards stagger | Framer Motion | `whileInView` com y: 40→0 + opacity, stagger 0.1s × index | Medium |
| Card hover effects | CSS | `group-hover` para border, shadow, scale, arrow translateX | Low |
| Process SVG conector | GSAP | `gsap.to` com strokeDashoffset: total→0, ScrollTrigger | **🔒 High** |
| Process steps stagger | Framer Motion | `whileInView` com y: 30→0 + opacity, stagger 0.2s | Medium |
| Números contador | Hook custom | `useCountUp` com requestAnimationFrame + easeOutCubic, 2s | **🔒 High** |
| CTA section stagger | Framer Motion | `whileInView` com stagger 0.15s entre elementos | Medium |
| Footer stagger | Framer Motion | `whileInView` stagger 0.1s entre colunas | Low |

---

## State & Logic

### Partículas (Canvas)

- Componente `ParticleField` cria um canvas full-size
- 80 partículas com posições aleatórias, opacidade 0.04
- Movimento senoidal lento (amplitude pequena, período longo)
- Parallax sutil baseado em scroll ou tempo
- Cleanup no unmount

### Contador Incremental

- Hook `useCountUp` recebe: valor final, duração, easing, trigger boolean
- Usa `requestAnimationFrame` para animação suave
- Easing easeOutCubic: `1 - Math.pow(1 - t, 3)`
- Formatação: prefix "+" ou "", sufix "%" quando aplicável
- Trigger via IntersectionObserver (once: true)

### SVG Conector (Processo)

- Path SVG horizontal posicionado entre os 5 steps
- `stroke-dasharray` = comprimento total do path
- `stroke-dashoffset` inicia em comprimento total
- Anima para 0 quando seção entra na viewport
- GSAP ScrollTrigger ou IntersectionObserver + CSS transition

### Navbar Scroll

- Hook `useScrolled` usa scroll event listener
- Threshold: 80px
- Retorna boolean para togglar classes CSS
- Debounce/throttle no listener para performance

---

## Project Structure

```
src/
├── main.tsx                    # Entry point
├── App.tsx                     # Composição das seções
├── index.css                   # Tailwind + custom CSS + font imports
├── components/
│   ├── Navbar.tsx              # Scroll-aware navigation
│   ├── MobileMenu.tsx          # Hamburger menu overlay
│   ├── Footer.tsx              # 4-col grid footer
│   ├── SectionTag.tsx          # Reusable label component
│   ├── ServiceCard.tsx         # Service card with hover
│   ├── ProcessStep.tsx         # Individual process step
│   ├── MetricCounter.tsx       # Animated counter
│   ├── ParticleField.tsx       # Canvas particle system
│   └── EagleLogo.tsx           # SVG logo component
├── sections/
│   ├── HeroSection.tsx         # Hero with particles + image
│   ├── AboutSection.tsx        # Philosophy section
│   ├── ServicesSection.tsx     # 2×2 grid services
│   ├── ProcessSection.tsx      # 5-step process + SVG line
│   ├── NumbersSection.tsx      # Social proof metrics
│   └── CtaSection.tsx          # Final CTA
├── hooks/
│   ├── useScrolled.ts          # Scroll detection hook
│   └── useCountUp.ts           # Counter animation hook
└── assets/
    └── founder.jpg             # Hero founder image
```

---

## Notes

- **Sem shadcn/ui**: O design não utiliza nenhum padrão UI que justifique componentes shadcn. Todos os elementos são custom-built.
- **Animações críticas**: As 3 animações 🔒 High (partículas, SVG conector, contador) são o diferencial visual do site. Devem ser implementadas com atenção especial.
- **Responsive**: Mobile-first não é necessário — o design é desktop-first com adaptações mobile. Breakpoint principal: 1024px, secundário: 768px.
- **Performance**: Canvas de partículas deve ser pausado quando hero não está visível. Usar IntersectionObserver para pausar/resumir animação.
