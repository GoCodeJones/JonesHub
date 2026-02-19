import { useState } from "react"
import "./Contribute.css"

const BTC_ADDRESS = "bc1SEUENDERECOAQUI"

const TIERS = [
  {
    id: "mises",
    label: "Tier I",
    name: "Resenheiro",
    price: "R$ 15",
    period: "/mês",
    description:
      "Você assiste os vídeos, concorda com tudo, mas nunca comenta. A gente sabe que você existe. Obrigado por finalmente fazer algo.",
    perks: [
      "Badge no Discord que ninguém vai notar",
      "Menção nos créditos entre 47 outros nomes",
      "Satisfação moral duvidosa",
    ],
    quote: '"É melhor que nada." — provavelmente você agora',
    cta: "Virar Assistente",
    livepix: "#livepix-mises",
  },
  {
    id: "rothbard",
    label: "Tier II",
    name: "Membro Raiz",
    price: "R$ 35",
    period: "/mês",
    featured: true,
    description:
      "Você já mandou o link do canal pra pelo menos três pessoas que não pediram. Você é o núcleo duro. O algoritmo teme você.",
    perks: [
      "Tudo do Tier I (sim, inclusive a satisfação moral duvidosa)",
      "Acesso antecipado aos vídeos pra reclamar primeiro",
      "Canal exclusivo no Discord pra falar besteira",
      "Voto em pautas que provavelmente vão ser ignoradas",
    ],
    quote: '"Eu era fã antes de ser legal." — você, em breve',
    cta: "Virar Membro Raiz",
    livepix: "#livepix-rothbard",
  },
  {
    id: "hoppe",
    label: "Tier III",
    name: "Patrocinador Suspeito",
    price: "R$ 80",
    period: "/mês",
    description:
      "R$ 80 por mês. Ninguém sabe o que você faz pra ter esse dinheiro sobrando mas tudo bem, não vamos perguntar. Bem-vindo.",
    perks: [
      "Tudo dos tiers anteriores",
      "Call mensal onde você pode reclamar ao vivo",
      "Conteúdo bônus de qualidade discutível",
      "Seu nome nos créditos em tamanho legível",
      "Nosso respeito genuíno (raro)",
    ],
    quote: '"A polícia nunca entenderia." — sem contexto',
    cta: "Virar Suspeito",
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
        <p className="contribute-eyebrow">isso aqui é um pedido de ajuda</p>
        <h1 className="contribute-title">Apoia ou não apoia?</h1>
        <p className="contribute-subtitle">
          O canal não tem patrocinador de curso de inglês nem de VPN duvidosa.
          Funciona na base da boa vontade, cafeína e suas contribuições.
        </p>
      </div>

      <div className="tiers-grid">
        {TIERS.map((tier) => (
          <TierCard key={tier.id} tier={tier} />
        ))}
      </div>

      <div className="or-divider">
        <span className="or-line" />
        <span className="or-text">ou contribua anonimamente como um cidadão honesto</span>
        <span className="or-line" />
      </div>

      <div className="direct-grid">

        <div className="direct-card">
          <span className="direct-icon direct-icon--btc">₿</span>
          <h3 className="direct-title">Bitcoin</h3>
          <p className="direct-desc">
            Sem banco. Sem governo. Sem sua mãe sabendo.
            O jeito mais honesto de mandar dinheiro.
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
            Pix durante a live. Seu nome aparece na tela.
            Glória instantânea por um preço acessível.
          </p>
          <a href="#livepix" className="direct-btn direct-btn--livepix">
            Quero minha glória <span className="btn-arrow">→</span>
          </a>
        </div>

        <div className="direct-card">
          <span className="direct-icon direct-icon--discord">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
          </span>
          <h3 className="direct-title">Discord</h3>
          <p className="direct-desc">
            Onde a comunidade vive, discute e manda meme
            fora de contexto às 2 da manhã. Você vai se sentir em casa.
          </p>
          <a href="#discord" className="direct-btn direct-btn--discord">
            Entrar no servidor <span className="btn-arrow">→</span>
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