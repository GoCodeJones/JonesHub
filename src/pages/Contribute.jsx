export default function Contribute() {

  const btc = "bc1SEUENDERECOAQUI"

  function copyBTC() {
    navigator.clipboard.writeText(btc)
    alert("Endereço BTC copiado!")
  }

  return (
    <section className="section">
      <h1 className="section-title">Apoie o projeto</h1>

      <div className="contribute-box">

        <h3>Bitcoin</h3>
        <p className="btc-address">{btc}</p>

        <button onClick={copyBTC} className="copy-btn">
          Copiar endereço
        </button>

        <hr />

        <h3>Comunidade</h3>
        <p>Entre no Discord para discussões, sugestões e conteúdo exclusivo.</p>

        <a href="#" className="discord-btn">
          Entrar no Discord
        </a>

      </div>
    </section>
  )
}
