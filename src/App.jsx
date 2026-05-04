import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import ProductFeature from './components/ProductFeature'
import QuickGrid from './components/QuickGrid'
import Story from './components/Story'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { products } from './data/products'

const ease = [0.4, 0, 0.2, 1]

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeBanner />

      {/* Products intro */}
      <section id="products" style={{
        background: 'var(--cream)',
        padding: '100px 24px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.p
            className="section-eyebrow"
            style={{ display: 'block', textAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease }}
          >
            Nos Créations
          </motion.p>
          <motion.h2
            className="section-title"
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
          >
            La Collection
          </motion.h2>
          <motion.p
            className="section-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.16, ease }}
          >
            Deux silhouettes. Une même philosophie : beauté naturelle et savoir-faire d'exception.
          </motion.p>
        </div>
      </section>

      {products.map((product, i) => (
        <ProductFeature key={product.id} product={product} reversed={i % 2 !== 0} />
      ))}

      <QuickGrid />
      <Story />
      <CTA />
      <Footer />
    </>
  )
}
