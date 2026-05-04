import { motion } from 'framer-motion'

const ease = [0.4, 0, 0.2, 1]

export default function Story() {
  return (
    <section id="story" style={{
      background: 'var(--near-black)',
      color: '#fff',
      padding: '110px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient blob */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="story-inner" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 80,
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* Text */}
        <motion.div
          style={{ flex: 1 }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.85, ease }}
        >
          <p className="section-eyebrow">Notre Histoire</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: '#fff',
            marginBottom: 32,
            marginTop: 12,
          }}>
            L'art de marier<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 400 }}>deux matières.</em>
          </h2>

          {[
            `AD Collection est née d'une passion pour les matériaux naturels et le travail artisanal. Chaque sac est conçu avec soin, alliant le cuir de qualité supérieure au rotin tressé à la main par des artisans passionnés.`,
            `Nos créations sont des pièces uniques qui traversent les tendances, pensées pour accompagner les femmes modernes qui valorisent l'authenticité et le style intemporel.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              style={{
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.85,
                color: 'rgba(255,255,255,0.62)',
                maxWidth: 480,
                marginBottom: 16,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease }}
            >
              {text}
            </motion.p>
          ))}

          {/* Stats row */}
          <motion.div
            style={{
              display: 'flex',
              gap: 32,
              marginTop: 40,
              paddingTop: 36,
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            {[
              { n: '100%', l: 'Fait main' },
              { n: '2', l: 'Modèles' },
              { n: '∞', l: 'Qualité' },
            ].map(({ n, l }) => (
              <div key={l}>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 32,
                  fontWeight: 600,
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}>{n}</p>
                <p style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: 6,
                }}>{l}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          className="story-visual"
          style={{ flex: 1, maxWidth: 460 }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.85, ease }}
        >
          <motion.div
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              borderRadius: 24,
              overflow: 'hidden',
              background: 'var(--gray-4)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 180, damping: 28 }}
          >
            <img
              src="/images/story-bg.jpg"
              alt="AD Collection — Atelier artisanal"
              style={{ position: 'absolute', inset: 0, zIndex: 2 }}
              onError={e => { e.target.style.display = 'none' }}
            />
            {/* Gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1,
              background: 'linear-gradient(160deg, rgba(201,168,76,0.15) 0%, rgba(122,62,42,0.3) 100%)',
            }} />
            {/* Fallback logo */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 64,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.08)',
                letterSpacing: '-0.02em',
              }}>AD</p>
            </div>
            {/* Glass badge bottom */}
            <div style={{
              position: 'absolute', bottom: 20, left: 20, right: 20, zIndex: 3,
              background: 'rgba(14,12,11,0.6)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: 14,
              padding: '14px 18px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 600, color: '#fff' }}>
                AD Collection
              </p>
              <p style={{ fontSize: 12, fontWeight: 400, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', marginTop: 3 }}>
                Artisanat · Cuir · Rotin
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
