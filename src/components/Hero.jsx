import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}
const item = {
  hidden:   { opacity: 0, y: 36 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

const ClutchIcon = () => (
  <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '65%', height: 'auto' }}>
    <rect x="8" y="18" width="144" height="74" rx="6" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6"/>
    <rect x="52" y="12" width="56" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <g opacity="0.3" stroke="currentColor" strokeWidth="0.8">
      {[30,45,60,75,90,105,120,135].map(x => (
        <line key={x} x1={x} y1="55" x2={x} y2="78"/>
      ))}
      <line x1="20" y1="60" x2="148" y2="60"/>
      <line x1="20" y1="72" x2="148" y2="72"/>
    </g>
  </svg>
)

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 52, behavior: 'smooth' })
  }

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 80,
      padding: 'calc(52px + 60px) 24px 80px',
      maxWidth: 1200,
      margin: '0 auto',
    }}
    className="hero-inner"
    >
      {/* Text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ flex: '0 0 auto', maxWidth: 440 }}
      >
        <motion.p variants={item} style={{
          fontSize: 13, fontWeight: 500, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--cognac)', marginBottom: 16,
        }}>
          Nouvelle Collection
        </motion.p>

        <motion.h1 variants={item} style={{
          fontSize: 'clamp(42px, 6vw, 72px)',
          fontWeight: 700, lineHeight: 1.05,
          letterSpacing: '-0.02em', color: 'var(--black)', marginBottom: 20,
        }}>
          L'artisanat<br />à l'état pur.
        </motion.h1>

        <motion.p variants={item} style={{
          fontSize: 19, fontWeight: 300,
          color: 'var(--gray-3)', lineHeight: 1.5, marginBottom: 36,
        }}>
          Sacs en cuir &amp; rotin tressé, faits à la main.
        </motion.p>

        <motion.div variants={item}>
          <motion.a
            href="#products"
            onClick={e => { e.preventDefault(); scrollTo('#products') }}
            className="btn btn-primary"
            whileHover={{ scale: 1.03, backgroundColor: '#3a3a3c' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Découvrir
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Visual */}
      <motion.div
        style={{ flex: 1, maxWidth: 600 }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease }}
      >
        <motion.div
          style={{
            position: 'relative', width: '100%', aspectRatio: '4/3',
            borderRadius: 20, overflow: 'hidden', background: 'var(--gray-1)',
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          <img
            src="/images/hero-bag.jpg"
            alt="AD Collection — Clutch Rotin & Cuir"
            style={{ position: 'absolute', inset: 0, zIndex: 2 }}
            onError={e => { e.target.style.display = 'none' }}
          />
          <div className="img-placeholder placeholder-brown" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <ClutchIcon />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
