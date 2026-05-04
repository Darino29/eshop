import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Produits',       href: '#products' },
  { label: 'Notre Histoire', href: '#story' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled
    ? 'rgba(29,29,31,0.92)'
    : 'rgba(255,255,255,0.85)'

  const textColor = scrolled ? '#fff' : '#1d1d1f'

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 52, behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 100,
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
        }}
        animate={{ backgroundColor: navBg }}
        transition={{ duration: 0.35 }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 52,
        }}>
          {/* Logo */}
          <motion.a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.02em', color: textColor, transition: 'color 0.35s' }}
            whileHover={{ opacity: 0.75 }}
          >
            AD <span style={{ fontWeight: 300 }}>Collection</span>
          </motion.a>

          {/* Desktop links */}
          <ul className="nav-links-desktop" style={{ display: 'flex', gap: 32 }}>
            {links.map(l => (
              <li key={l.label}>
                <motion.a
                  href={l.href}
                  onClick={e => { e.preventDefault(); scrollTo(l.href) }}
                  style={{ fontSize: 13, color: textColor, opacity: 0.85, transition: 'color 0.35s' }}
                  whileHover={{ opacity: 1 }}
                >
                  {l.label}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Burger */}
          <button
            className="nav-burger-btn"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
            style={{
              display: 'none', flexDirection: 'column', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer', padding: 4,
            }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                style={{ display: 'block', width: 22, height: 2, background: textColor, borderRadius: 2, transition: 'background 0.35s' }}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45,  y: 7 }
                    : i === 1 ? { opacity: 0 }
                    :           { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0, opacity: 1 }
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
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: 52, left: 0, right: 0, zIndex: 99,
              background: 'rgba(29,29,31,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '8px 0 24px',
            }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)' }}
              >
                <a
                  href={l.href}
                  onClick={e => { e.preventDefault(); scrollTo(l.href) }}
                  style={{
                    display: 'block', padding: '18px 24px',
                    fontSize: 17, color: '#fff', fontWeight: 500, textAlign: 'center',
                  }}
                >
                  {l.label}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
