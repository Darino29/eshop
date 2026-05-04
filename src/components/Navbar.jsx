import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Collection', href: '#products' },
  { label: 'Notre Histoire', href: '#story' },
  { label: 'Contact', href: '#contact' },
]

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Floating navbar */}
      <motion.nav
        aria-label="Navigation principale"
        style={{
          position: 'fixed',
          top: 16,
          left: 16,
          right: 16,
          zIndex: 100,
          borderRadius: 16,
          overflow: 'hidden',
        }}
        animate={{
          backgroundColor: scrolled ? 'rgba(14,12,11,0.78)' : 'rgba(255,255,255,0.6)',
          borderColor: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.5)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(0,0,0,0.35)'
            : '0 4px 24px rgba(0,0,0,0.08)',
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={scrolled ? 'glass-dark' : 'glass'}
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 24px', height: 56,
        }}>
          {/* Logo */}
          <motion.a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: scrolled ? '#fff' : 'var(--black)',
              cursor: 'pointer',
            }}
            animate={{ color: scrolled ? '#ffffff' : '#0e0c0b' }}
            transition={{ duration: 0.35 }}
            whileHover={{ opacity: 0.75 }}
          >
            AD <span style={{ fontWeight: 400, fontStyle: 'italic' }}>Collection</span>
          </motion.a>

          {/* Desktop links */}
          <ul className="nav-links-desktop" style={{ display: 'flex', gap: 36 }}>
            {links.map(l => (
              <li key={l.label}>
                <motion.a
                  href={l.href}
                  onClick={e => { e.preventDefault(); scrollTo(l.href) }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                  animate={{ color: scrolled ? 'rgba(255,255,255,0.8)' : 'rgba(14,12,11,0.75)' }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ opacity: 1, color: scrolled ? '#ffffff' : '#0e0c0b' }}
                >
                  {l.label}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <motion.a
            href="#contact"
            onClick={e => { e.preventDefault(); scrollTo('#contact') }}
            className="btn btn-gold nav-links-desktop"
            style={{ padding: '9px 22px', fontSize: 11, cursor: 'pointer' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Commander
          </motion.a>

          {/* Burger */}
          <button
            className="nav-burger-btn"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            style={{
              display: 'none', flexDirection: 'column', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer', padding: 6,
            }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                style={{
                  display: 'block', width: 22, height: 1.5,
                  background: scrolled ? '#fff' : 'var(--black)',
                  borderRadius: 2,
                }}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45, y: 6.5 }
                    : i === 1 ? { opacity: 0, scaleX: 0 }
                    :           { rotate: -45, y: -6.5 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              top: 88,
              left: 16,
              right: 16,
              zIndex: 99,
              borderRadius: 16,
              overflow: 'hidden',
              background: 'rgba(14,12,11,0.92)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '8px 0 16px',
            }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.22 }}
              >
                <a
                  href={l.href}
                  onClick={e => { e.preventDefault(); scrollTo(l.href); setMenuOpen(false) }}
                  style={{
                    display: 'block',
                    padding: '16px 24px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.85)',
                    borderBottom: i < links.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  {l.label}
                </a>
              </motion.div>
            ))}
            <div style={{ padding: '12px 24px 4px' }}>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); scrollTo('#contact'); setMenuOpen(false) }}
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Commander
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
