import { useState } from 'react'
import { motion } from 'framer-motion'

const ease = [0.4, 0, 0.2, 1]

const slideIn = (dir) => ({
  hidden:  { opacity: 0, x: dir === 'left' ? -56 : 56 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease } },
})

export default function ProductFeature({ product, reversed }) {
  const isDark  = product.theme === 'dark'
  const isBrown = product.placeholderTheme === 'brown'

  const [mainImg, setMainImg] = useState(product.images.main)
  const [thumb1,  setThumb1]  = useState(product.images.thumb1)
  const [thumb2,  setThumb2]  = useState(product.images.thumb2)

  const swapMain = (src, setSrc) => {
    const prev = mainImg
    setMainImg(src)
    setSrc(prev)
  }

  const bg          = isDark ? 'var(--near-black)' : 'var(--gray-1)'
  const textColor   = isDark ? '#fff' : 'var(--black)'
  const mediaBg     = isDark ? 'rgba(255,255,255,0.04)' : 'var(--gray-2)'
  const thumbBg     = isDark ? 'rgba(255,255,255,0.04)' : '#ddd8d0'
  const glassBg     = isDark
    ? 'rgba(255,255,255,0.05)'
    : 'rgba(255,255,255,0.75)'
  const glassBorder = isDark
    ? 'rgba(255,255,255,0.1)'
    : 'rgba(255,255,255,0.6)'

  const gradientFallback = isBrown
    ? 'linear-gradient(145deg, #d4a47a, #8b4513)'
    : 'linear-gradient(145deg, #f5ead5, #c8a870)'

  return (
    <section
      id={`product-${product.id}`}
      style={{ background: bg, color: textColor, padding: '100px 24px' }}
    >
      <div
        className="pf-inner"
        style={{
          display: 'flex',
          flexDirection: reversed ? 'row-reverse' : 'row',
          alignItems: 'center',
          gap: 80,
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
        }}
      >
        {/* ── Media ── */}
        <motion.div
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}
          variants={slideIn(reversed ? 'right' : 'left')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {/* Main image */}
          <motion.div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: 24,
              overflow: 'hidden',
              background: mediaBg,
              boxShadow: isDark
                ? '0 24px 72px rgba(0,0,0,0.5)'
                : '0 24px 72px rgba(122,62,42,0.15)',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 180, damping: 28 }}
          >
            <img
              src={mainImg}
              alt={product.name}
              style={{ position: 'absolute', inset: 0, zIndex: 2, width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.4s' }}
              onError={e => { e.target.style.display = 'none' }}
            />
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1,
              background: gradientFallback, opacity: 0.28,
            }} />
          </motion.div>

          {/* Thumbnails */}
          <div className="product-thumbnails" style={{ display: 'flex', gap: 14 }}>
            {[
              { src: thumb1, set: setThumb1 },
              { src: thumb2, set: setThumb2 },
            ].map(({ src, set }, i) => (
              <motion.button
                key={i}
                onClick={() => swapMain(src, set)}
                aria-label={`Voir ${product.name} image ${i + 2}`}
                style={{
                  flex: 1,
                  position: 'relative',
                  aspectRatio: '4/3',
                  borderRadius: 14,
                  overflow: 'hidden',
                  background: thumbBg,
                  cursor: 'pointer',
                  border: 'none',
                  padding: 0,
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                <img
                  src={src}
                  alt={`${product.name} vue ${i + 2}`}
                  style={{ position: 'absolute', inset: 0, zIndex: 2, width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.target.style.display = 'none' }}
                />
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 1,
                  background: gradientFallback, opacity: 0.2,
                }} />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Info (glass panel) ── */}
        <motion.div
          className="pf-info"
          style={{ flex: '0 0 400px', maxWidth: 400 }}
          variants={slideIn(reversed ? 'left' : 'right')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {/* Glass card */}
          <div style={{
            background: glassBg,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${glassBorder}`,
            borderRadius: 24,
            padding: '40px 36px',
            boxShadow: isDark
              ? '0 8px 40px rgba(0,0,0,0.3)'
              : '0 8px 40px rgba(122,62,42,0.1)',
          }}>
            <p className="section-eyebrow">{product.eyebrow}</p>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 4vw, 52px)',
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              marginBottom: 20,
              color: textColor,
            }}>
              {product.name}
            </h2>

            <p style={{
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.8,
              opacity: 0.7,
              marginBottom: 32,
              color: textColor,
            }}>
              {product.description}
            </p>

            <ul
              className={`product-specs${isDark ? '' : ' light-border'}`}
              style={{ color: textColor }}
            >
              {product.specs.map(s => (
                <li key={s.label}>
                  <span className="spec-label">{s.label}</span>
                  <span className="spec-val">{s.value}</span>
                </li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                const el = document.querySelector('#contact')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
              }}
              className="btn btn-gold"
              style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Me contacter pour commander
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
