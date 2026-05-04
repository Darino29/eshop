import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import ProductFeature from './components/ProductFeature'
import QuickGrid from './components/QuickGrid'
import Story from './components/Story'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { products } from './data/products'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <section id="products" style={{ padding: '100px 0 40px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">La Collection</h2>
          <p className="section-sub">
            Deux silhouettes. Une même philosophie : beauté naturelle et savoir-faire d'exception.
          </p>
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
