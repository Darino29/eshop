const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 52, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--black)', color: 'rgba(255,255,255,0.6)', padding: '60px 0 0' }}>
      <div
        className="footer-inner"
        style={{
          display: 'flex', justifyContent: 'space-between', gap: 48,
          maxWidth: 1200, margin: '0 auto', padding: '0 24px 48px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div style={{ maxWidth: 280 }}>
          <span style={{ display: 'block', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '0.02em' }}>
            AD Collection
          </span>
          <p style={{ fontSize: 14, lineHeight: 1.6 }}>
            Sacs artisanaux en cuir &amp; rotin, faits à la main.
          </p>
        </div>

        <div className="footer-links" style={{ display: 'flex', gap: 60 }}>
          <div className="footer-col">
            <p className="footer-col-title">Collection</p>
            <ul>
              <li><a href="#product-clutch" onClick={e => { e.preventDefault(); scrollTo('#product-clutch') }}>La Clutch Rotin</a></li>
              <li><a href="#product-box"    onClick={e => { e.preventDefault(); scrollTo('#product-box') }}>La Box Bag</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Informations</p>
            <ul>
              <li><a href="#story"   onClick={e => { e.preventDefault(); scrollTo('#story') }}>Notre Histoire</a></li>
              <li><a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 24px', fontSize: 12 }}>
        © 2026 AD Collection. Tous droits réservés.
      </div>
    </footer>
  )
}
