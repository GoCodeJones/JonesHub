import { useState } from "react"
import "./Contribute.css"

const BTC_ADDRESS = "bc1SEUENDERECOAQUI"

const TIERS = [
  {
    id: "mises",
    label: "Tier I",
    name: "Miseano",
    price: "R$ 15",
    period: "/mês",
    description:
      "O passo inicial. Você descobriu a Escola Austríaca, rejeitou o keynesianismo e está pronto pra destruir qualquer argumento pró-estado no jantar de família.",
    perks: [
      "Acesso ao canal de membros no Discord",
      "Badge exclusivo de Miseano",
      "Menção nos créditos dos vídeos",
    ],
    quote: '"O Estado é coerção." — Ludwig von Mises',
    cta: "Assinar como Miseano",
    livepix: "#livepix-mises",
  },
  {
    id: "rothbard",
    label: "Tier II",
    name: "Rothbardiano",
    price: "R$ 35",
    period: "/mês",
    featured: true,
    description:
      "Você foi além. Propriedade privada absoluta, mercado livre sem concessão, e já leu pelo menos metade do Man, Economy and State. O Estado não é só ruim — é ilegítimo.",
    perks: [
      "Tudo do Tier I",
      "Acesso antecipado a vídeos e artigos",
      "Canal exclusivo de discussão política",
      "Voto em pautas do canal",
    ],
    quote: '"Toda tributação é roubo." — Murray Rothbard',
    cta: "Assinar como Rothbardiano",
    livepix: "#livepix-rothbard",
  },
  {
    id: "hoppe",
    label: "Tier III",
    name: "Hoppeano",
    price: "R$ 80",
    period: "/mês",
    description:
      "O nível máximo. Você não só aboliria o Estado — você já tem um plano de covenant community pronto. Físico temporal. Democracia é o problema, não a solução.",
    perks: [
      "Tudo dos Tiers anteriores",
      "Call mensal exclusiva com membros",
      "Acesso a conteúdo arquivado e bônus",
      "Badge Hoppeano no Discord",
      "Nome nos créditos de todos os vídeos",
    ],
    quote: '"A democracia é o deus que falhou." — Hans-Hermann Hoppe',
    cta: "Assinar como Hoppeano",
    livepix: "#livepix-hoppe",
  },
]

export default function Contribute() {
  const [copied, setCopied] = useState(false)

  function copyBTC() {
    navigator.clipboard.writeText(BTC_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section className="contribute-page">

      <div className="contribute-hero">
        <p className="contribute-eyebrow">Apoie o projeto</p>
        <h1 className="contribute-title">Seja um afiliado</h1>
        <p className="contribute-subtitle">
          O conteúdo é livre, mas produzir conteúdo de qualidade tem custo.
          Se você acredita no projeto, escolha um nível e faça parte.
        </p>
      </div>

      <div className="tiers-grid">
        {TIERS.map((tier) => (
          <TierCard key={tier.id} tier={tier} />
        ))}
      </div>

      <div className="or-divider">
        <span className="or-line" />
        <span className="or-text">ou apoie diretamente</span>
        <span className="or-line" />
      </div>

      <div className="direct-grid">

        <div className="direct-card">
          <span className="direct-icon direct-icon--btc">₿</span>
          <h3 className="direct-title">Bitcoin</h3>
          <p className="direct-desc">
            Sem intermediários. Sem taxas. Sem Estado.
            O jeito mais soberano de apoiar.
          </p>
          <div className="btc-row">
            <span className="btc-address">{BTC_ADDRESS}</span>
            <button onClick={copyBTC} className="copy-btn">
              {copied ? "✓ Copiado" : "Copiar"}
            </button>
          </div>
        </div>

        <div className="direct-card">
          <span className="direct-icon direct-icon--livepix">⚡</span>
          <h3 className="direct-title">LivePix</h3>
          <p className="direct-desc">
            Apoie via Pix com recorrência. Rápido, prático
            e com confirmação em tempo real durante as lives.
          </p>
          <a href="#livepix" className="direct-btn direct-btn--livepix">
            Acessar LivePix <span className="btn-arrow">→</span>
          </a>
        </div>

        <div className="direct-card">
          <span className="direct-icon direct-icon--discord">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
          </span>
          <h3 className="direct-title">Comunidade Discord</h3>
          <p className="direct-desc">
            Discussões, sugestões, conteúdo exclusivo
            e o melhor grupo de anarcocapitalistas da internet.
          </p>
          <a href="#discord" className="direct-btn direct-btn--discord">
            Entrar no Discord <span className="btn-arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}

function TierCard({ tier }) {
  return (
    <div className={`tier-card tier-card--${tier.id}${tier.featured ? " tier-card--featured" : ""}`}>
      {tier.featured && <div className="tier-badge">★ Mais popular</div>}

      <p className="tier-label">{tier.label}</p>
      <h2 className="tier-name">{tier.name}</h2>

      <div className="tier-price-row">
        <span className="tier-price">{tier.price}</span>
        <span className="tier-period">{tier.period}</span>
      </div>

      <blockquote className="tier-quote">{tier.quote}</blockquote>

      <p className="tier-desc">{tier.description}</p>

      <ul className="tier-perks">
        {tier.perks.map((perk) => (
          <li key={perk} className="tier-perk">
            <span className="perk-dot">◆</span>
            {perk}
          </li>
        ))}
      </ul>

      <a href={tier.livepix} className="tier-cta">
        {tier.cta}
      </a>
    </div>
  )
}