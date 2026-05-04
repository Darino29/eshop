import { motion } from 'framer-motion'

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer style={{ background: '#0a0806', color: 'rgba(255,255,255,0.5)', padding: '72px 0 0' }}>
      <div
        className="footer-inner"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 48,
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: '0 24px 56px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Brand */}
        <div style={{ maxWidth: 280 }}>
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{
              display: 'block',
              fontFamily: 'var(--font-serif)',
              fontSize: 24,
              fontWeight: 600,
              fontStyle: 'italic',
              color: '#fff',
              marginBottom: 14,
              letterSpacing: '0.02em',
              cursor: 'pointer',
            }}
          >
            AD Collection
          </a>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.4)' }}>
            Sacs artisanaux en cuir &amp; rotin,<br />faits à la main.
          </p>
          {/* Gold line */}
          <div style={{
            width: 48, height: 2,
            background: 'linear-gradient(90deg, var(--gold), transparent)',
            marginTop: 20, borderRadius: 2,
          }} />
        </div>

        {/* Links */}
        <div className="footer-links" style={{ display: 'flex', gap: 60 }}>
          <div className="footer-col">
            <p className="footer-col-title">Collection</p>
            <ul>
              <li>
                <a href="#product-clutch" onClick={e => { e.preventDefault(); scrollTo('#product-clutch') }}>
                  La Clutch Rotin
                </a>
              </li>
              <li>
                <a href="#product-box" onClick={e => { e.preventDefault(); scrollTo('#product-box') }}>
                  La Box Bag
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Informations</p>
            <ul>
              <li>
                <a href="#story" onClick={e => { e.preventDefault(); scrollTo('#story') }}>
                  Notre Histoire
                </a>
              </li>
              <li>
                <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>
                  Commander
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: '20px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
          © 2026 AD Collection. Tous droits réservés.
        </p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
          Fait à la main avec ♡
        </p>
      </div>
    </footer>
  )
}
