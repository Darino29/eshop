import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function Story() {
  return (
    <section id="story" style={{ background: 'var(--black)', color: '#fff', padding: '100px 0' }}>
      <div className="story-inner" style={{ display: 'flex', alignItems: 'center', gap: 80, maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Text */}
        <motion.div
          style={{ flex: 1 }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease }}
        >
          <p style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cognac)', marginBottom: 12 }}>
            Notre Histoire
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 28, marginTop: 12 }}>
            L'art de marier<br />deux matières.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, opacity: 0.7, maxWidth: 480 }}>
            AD Collection est née d'une passion pour les matériaux naturels et le travail artisanal. Chaque sac est conçu avec soin, alliant le cuir de qualité supérieure au rotin tressé à la main par des artisans passionnés.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, opacity: 0.7, maxWidth: 480, marginTop: 16 }}>
            Nos créations sont des pièces uniques qui traversent les tendances, pensées pour accompagner les femmes modernes qui valorisent l'authenticité et le style intemporel.
          </p>
        </motion.div>

        {/* Visual */}
        <motion.div
          className="story-visual"
          style={{ flex: 1, maxWidth: 480 }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease }}
        >
          <motion.div
            className="story-img-wrap"
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              borderRadius: 20,
              overflow: 'hidden',
              background: 'var(--gray-4)',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 28 }}
          >
            <img
              src="/images/story-bg.jpg"
              alt="AD Collection — Atelier"
              style={{ position: 'absolute', inset: 0, zIndex: 2 }}
              onError={e => { e.target.style.display = 'none' }}
            />
            {/* Fallback logo */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.03em', color: 'rgba(255,255,255,0.12)', textAlign: 'center', lineHeight: 1 }}>
                AD<br />
                <small style={{ display: 'block', fontSize: 14, fontWeight: 400, letterSpacing: '0.12em', marginTop: 4 }}>COLLECTION</small>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
