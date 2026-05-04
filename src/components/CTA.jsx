import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function CTA() {
  return (
    <section id="contact" style={{ background: 'var(--cognac)', padding: '100px 0' }}>
      <div className="container cta-actions" style={{ textAlign: 'center' }}>
        <motion.h2
          style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', marginBottom: 16 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
        >
          Intéressée par un sac&nbsp;?
        </motion.h2>

        <motion.p
          style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', marginBottom: 40, lineHeight: 1.6 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          Contactez-nous pour connaître les disponibilités, les prix et passer commande.
        </motion.p>

        <motion.div
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <motion.a
            href="mailto:contact@adcollection.com"
            className="btn"
            style={{ background: '#fff', color: 'var(--cognac)' }}
            whileHover={{ scale: 1.04, backgroundColor: '#f0f0f0' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Envoyer un e-mail
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-cognac"
            whileHover={{ scale: 1.04, borderColor: '#fff', color: '#fff' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Suivre sur Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
