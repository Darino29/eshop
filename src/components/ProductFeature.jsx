import { useState } from 'react'
import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

const slideVariants = (direction) => ({
  hidden:  { opacity: 0, x: direction === 'left' ? -60 : 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
})

const ClutchPlaceholder = () => (
  <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '65%' }}>
    <rect x="8" y="18" width="144" height="74" rx="6" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6"/>
    <rect x="52" y="12" width="56" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <g opacity="0.3" stroke="currentColor" strokeWidth="0.8">
      {[30,45,60,75,90,105,120,135].map(x => <line key={x} x1={x} y1="50" x2={x} y2="78"/>)}
      <line x1="20" y1="58" x2="148" y2="58"/>
      <line x1="20" y1="70" x2="148" y2="70"/>
    </g>
  </svg>
)

const BoxPlaceholder = () => (
  <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '65%' }}>
    <rect x="25" y="45" width="110" height="70" rx="5" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6"/>
    <rect x="25" y="30" width="110" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <path d="M 60 30 Q 80 12 100 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <rect x="72" y="46" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <g opacity="0.3" stroke="currentColor" strokeWidth="0.8">
      {[40,55,70,85,100,115].map(x => <line key={x} x1={x} y1="65" x2={x} y2="100"/>)}
      <line x1="30" y1="75" x2="130" y2="75"/>
      <line x1="30" y1="88" x2="130" y2="88"/>
    </g>
  </svg>
)

export default function ProductFeature({ product, reversed }) {
  const isDark = product.theme === 'dark'
  const isBrown = product.placeholderTheme === 'brown'
  const [mainImg, setMainImg] = useState(product.images.main)
  const [thumb1,  setThumb1]  = useState(product.images.thumb1)
  const [thumb2,  setThumb2]  = useState(product.images.thumb2)

  const swapMain = (thumb, setThumb) => {
    const prev = mainImg
    setMainImg(thumb)
    setThumb(prev)
  }

  const Placeholder = isBrown ? ClutchPlaceholder : BoxPlaceholder
  const placeholderClass = isBrown ? 'placeholder-brown' : 'placeholder-cream'

  const bg        = isDark ? '#1d1d1f' : '#f5f5f7'
  const textColor = isDark ? '#fff' : '#1d1d1f'
  const mediaBg   = isDark ? 'rgba(255,255,255,0.06)' : '#e8e8ed'
  const thumbBg   = isDark ? 'rgba(255,255,255,0.05)' : '#e0e0e5'
  const specBorder= isDark ? 'rgba(255,255,255,0.12)' : '#e8e8ed'
  const btnEl     = isDark
    ? <motion.a href="#contact" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} className="btn btn-outline" whileHover={{ scale: 1.03, background: 'var(--cognac)', color: '#fff', borderColor: 'var(--cognac)' }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>Me contacter pour commander</motion.a>
    : <motion.a href="#contact" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} className="btn btn-dark" whileHover={{ scale: 1.03, backgroundColor: '#3a3a3c' }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>Me contacter pour commander</motion.a>

  return (
    <section
      id={`product-${product.id}`}
      style={{ background: bg, color: textColor, padding: '80px 24px' }}
      className={isDark ? 'feature-dark' : 'feature-light'}
    >
      <div
        className={`product-feature-inner${reversed ? ' reverse' : ''}`}
        style={{
          display: 'flex',
          flexDirection: reversed ? 'row-reverse' : 'row',
          alignItems: 'center',
          gap: 80,
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* Media */}
        <motion.div
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}
          variants={slideVariants(reversed ? 'right' : 'left')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main image */}
          <motion.div
            style={{
              position: 'relative', width: '100%', aspectRatio: '4/3',
              borderRadius: 16, overflow: 'hidden', background: mediaBg,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 28 }}
          >
            <img
              src={mainImg}
              alt={product.name}
              style={{ position: 'absolute', inset: 0, zIndex: 2 }}
              onError={e => { e.target.style.display = 'none' }}
            />
            <div className={`img-placeholder ${placeholderClass}`} style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Placeholder />
            </div>
          </motion.div>

          {/* Thumbnails */}
          <div className="product-thumbnails" style={{ display: 'flex', gap: 12 }}>
            {[
              { src: thumb1, set: setThumb1 },
              { src: thumb2, set: setThumb2 },
            ].map(({ src, set }, i) => (
              <motion.div
                key={i}
                onClick={() => swapMain(src, set)}
                style={{
                  flex: 1, position: 'relative', aspectRatio: '4/3',
                  borderRadius: 10, overflow: 'hidden', background: thumbBg, cursor: 'pointer',
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <img
                  src={src}
                  alt={`${product.name} vue ${i + 1}`}
                  style={{ position: 'absolute', inset: 0, zIndex: 2 }}
                  onError={e => { e.target.style.display = 'none' }}
                />
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 1,
                  background: isBrown
                    ? 'linear-gradient(135deg, #d4a47a, #8b4513)'
                    : 'linear-gradient(135deg, #f5ead5, #c8a870)',
                  opacity: 0.2,
                }} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          className="product-info"
          style={{ flex: '0 0 380px', maxWidth: 380 }}
          variants={slideVariants(reversed ? 'left' : 'right')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
            {product.eyebrow}
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 24 }}>
            {product.name}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.75, marginBottom: 32 }}>
            {product.description}
          </p>

          <ul className="product-specs" style={{ borderBottomColor: specBorder }}>
            {product.specs.map(s => (
              <li key={s.label}>
                <span className="spec-label">{s.label}</span>
                <span className="spec-val">{s.value}</span>
              </li>
            ))}
          </ul>

          {btnEl}
        </motion.div>
      </div>
    </section>
  )
}
