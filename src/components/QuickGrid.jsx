import { motion } from 'framer-motion'
import { products } from '../data/products'

const ease = [0.4, 0, 0.2, 1]

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function QuickGrid() {
  return (
    <section id="collection" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: 64 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease }}
        >
          <p className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>
            AD Collection
          </p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Toute la Collection
          </h2>
          <p className="section-sub">
            Deux silhouettes, un même esprit artisanal.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 28,
        }}>
          {products.map((p, i) => {
            const isBrown = p.placeholderTheme === 'brown'
            return (
              <motion.article
                key={p.id}
                style={{
                  borderRadius: 24,
                  overflow: 'hidden',
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow: '0 4px 24px rgba(122,62,42,0.08)',
                  cursor: 'pointer',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.75, delay: i * 0.14, ease }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 28px 64px rgba(122,62,42,0.18)',
                  border: '1px solid rgba(201,168,76,0.35)',
                }}
              >
                {/* Image */}
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  background: isBrown ? '#e8d0b8' : '#f0e8d4',
                }}>
                  <motion.img
                    src={p.images.main}
                    alt={p.name}
                    style={{
                      position: 'absolute', inset: 0, zIndex: 2,
                      width: '100%', height: '100%', objectFit: 'cover',
                    }}
                    onError={e => { e.target.style.display = 'none' }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.55, ease }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 1,
                    background: isBrown
                      ? 'linear-gradient(145deg, #d4a47a, #8b4513)'
                      : 'linear-gradient(145deg, #f5ead5, #c8a870)',
                    opacity: 0.3,
                  }} />
                  {/* Category badge */}
                  <div style={{
                    position: 'absolute', top: 14, left: 14, zIndex: 3,
                    background: 'rgba(14,12,11,0.65)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderRadius: 980,
                    padding: '5px 12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.85)',
                    }}>
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '28px 28px 32px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 28,
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: 'var(--black)',
                    marginBottom: 10,
                    lineHeight: 1.1,
                  }}>
                    {p.name}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'var(--gray-3)',
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}>
                    {p.shortDesc}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <a
                      href={`#product-${p.id}`}
                      onClick={e => { e.preventDefault(); scrollTo(`#product-${p.id}`) }}
                      className="card-link"
                    >
                      Voir le produit
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </a>
                    {/* Gold dot */}
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--gold), var(--cognac))',
                      opacity: 0.25,
                    }} />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
