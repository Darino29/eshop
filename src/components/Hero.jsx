import { motion } from 'framer-motion'

const ease = [0.4, 0, 0.2, 1]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
}
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
}
const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease } },
}

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--cream)',
      display: 'flex',
      alignItems: 'center',
      padding: 'calc(64px + 56px) 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient blobs */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '10%', right: '5%',
          width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '5%', left: '0%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(122,62,42,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="hero-inner" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 80,
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* ── Text ── */}
        <motion.div
          className="hero-content"
          style={{ flex: '0 0 auto', maxWidth: 480 }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="section-eyebrow">
            Nouvelle Collection · AD Collection
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(52px, 7vw, 88px)',
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              color: 'var(--black)',
              marginBottom: 24,
            }}
          >
            L'artisanat<br />
            <em style={{ fontStyle: 'italic', color: 'var(--cognac)', fontWeight: 400 }}>
              à l'état pur.
            </em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 17,
              fontWeight: 300,
              color: 'var(--gray-3)',
              lineHeight: 1.75,
              marginBottom: 40,
              maxWidth: 400,
            }}
          >
            Sacs en cuir &amp; rotin tressé, faits à la main par des artisans passionnés. Chaque pièce est unique.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <motion.a
              href="#products"
              onClick={e => { e.preventDefault(); scrollTo('#products') }}
              className="btn btn-dark"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Voir la collection
            </motion.a>
            <motion.a
              href="#story"
              onClick={e => { e.preventDefault(); scrollTo('#story') }}
              className="btn btn-outline-cognac"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Notre histoire
            </motion.a>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            variants={fadeIn}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginTop: 40,
              paddingTop: 32,
              borderTop: '1px solid var(--gray-2)',
            }}
          >
            {[
              { n: '100%', l: 'Fait main' },
              { n: '2', l: 'Modèles exclusifs' },
              { n: '∞', l: 'Style intemporel' },
            ].map(({ n, l }) => (
              <div key={l}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, color: 'var(--cognac)', lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray-3)', marginTop: 4 }}>{l}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Visual ── */}
        <motion.div
          className="hero-visual"
          style={{ flex: 1, maxWidth: 580, position: 'relative' }}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
        >
          {/* Main image card */}
          <motion.div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '3/4',
              borderRadius: 28,
              overflow: 'hidden',
              background: 'var(--cream-dk)',
              boxShadow: '0 32px 80px rgba(122,62,42,0.2), 0 8px 24px rgba(0,0,0,0.1)',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 180, damping: 28 }}
          >
            <img
              src="/images/hero-bag.jpg"
              alt="AD Collection — Clutch Rotin & Cuir"
              style={{ position: 'absolute', inset: 0, zIndex: 2 }}
              onError={e => { e.target.style.display = 'none' }}
            />
            {/* Fallback gradient */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1,
              background: 'linear-gradient(145deg, #d4a47a 0%, #8b4513 50%, #4a2010 100%)',
              opacity: 0.35,
            }} />
            {/* Glass label overlay */}
            <div style={{
              position: 'absolute', bottom: 20, left: 20, right: 20, zIndex: 3,
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: 14,
              padding: '14px 18px',
              border: '1px solid rgba(255,255,255,0.5)',
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 600, color: 'var(--black)' }}>La Clutch Rotin</p>
              <p style={{ fontSize: 12, fontWeight: 500, color: 'var(--gray-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>Cuir &amp; Rotin · Fait main</p>
            </div>
          </motion.div>

          {/* Floating accent card */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: -24,
              right: -24,
              width: 160,
              height: 160,
              borderRadius: 20,
              overflow: 'hidden',
              background: 'var(--near-black)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.25)',
              border: '2px solid rgba(255,255,255,0.08)',
            }}
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/box-main.jpg"
              alt="La Box Bag AD Collection"
              style={{ position: 'absolute', inset: 0, zIndex: 2 }}
              onError={e => { e.target.style.display = 'none' }}
            />
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1,
              background: 'linear-gradient(145deg, #f5ead5, #c8a870)',
              opacity: 0.45,
            }} />
            <div style={{
              position: 'absolute', bottom: 10, left: 10, right: 10, zIndex: 3,
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>La Box Bag</p>
            </div>
          </motion.div>

          {/* Gold dot accent */}
          <motion.div
            style={{
              position: 'absolute', top: -12, left: -12,
              width: 48, height: 48, borderRadius: '50%',
              background: 'var(--gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
              <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
