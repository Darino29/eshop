import { motion } from 'framer-motion'

const ease = [0.4, 0, 0.2, 1]

export default function CTA() {
  return (
    <section id="contact" style={{
      background: 'var(--cream)',
      padding: '110px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative blobs */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '20%', left: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: 350, height: 350, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122,62,42,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Glass card */}
        <motion.div
          style={{
            background: 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.6)',
            borderRadius: 32,
            padding: 'clamp(48px, 6vw, 80px)',
            textAlign: 'center',
            boxShadow: '0 16px 60px rgba(122,62,42,0.12)',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease }}
        >
          <p className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>
            Contactez-nous
          </p>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
            color: 'var(--black)',
            marginBottom: 20,
          }}>
            Votre sac vous attend.
          </h2>

          <p style={{
            fontSize: 17,
            fontWeight: 300,
            color: 'var(--gray-3)',
            lineHeight: 1.75,
            maxWidth: 480,
            margin: '0 auto 48px',
          }}>
            Contactez-nous pour connaître les disponibilités, les prix et passer commande. Chaque pièce est faite à la main, sur demande.
          </p>

          <div className="cta-actions" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="mailto:contact@adcollection.com"
              className="btn btn-dark"
              style={{ cursor: 'pointer' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Envoyer un e-mail
            </motion.a>

            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-cognac"
              style={{ cursor: 'pointer' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Suivre sur Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
