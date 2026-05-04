import { motion } from 'framer-motion'
import { products } from '../data/products'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function QuickGrid() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 52, behavior: 'smooth' })
  }

  return (
    <section id="collection" style={{ padding: '100px 0', background: 'var(--white)' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          style={{ textAlign: 'center', marginBottom: 56 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          Toute la Collection
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {products.map((p, i) => {
            const isBrown = p.placeholderTheme === 'brown'
            return (
              <motion.article
                key={p.id}
                style={{ borderRadius: 18, overflow: 'hidden', background: 'var(--gray-1)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease }}
                whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(0,0,0,0.13)' }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <motion.img
                    src={p.images.main}
                    alt={p.name}
                    style={{ position: 'absolute', inset: 0, zIndex: 2, width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { e.target.style.display = 'none' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 1,
                    background: isBrown
                      ? 'linear-gradient(135deg, #d4a47a, #8b4513)'
                      : 'linear-gradient(135deg, #f5ead5, #c8a870)',
                    opacity: 0.25,
                  }} />
                </div>

                {/* Body */}
                <div style={{ padding: 24 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cognac)', marginBottom: 8 }}>
                    {p.category}
                  </p>
                  <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 10 }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--gray-3)', lineHeight: 1.6, marginBottom: 20 }}>
                    {p.shortDesc}
                  </p>
                  <a
                    href={`#product-${p.id}`}
                    onClick={e => { e.preventDefault(); scrollTo(`#product-${p.id}`) }}
                    className="card-link"
                  >
                    Voir le produit →
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
