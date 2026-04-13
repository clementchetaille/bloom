import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products'
import { useCart } from '../components/CartContext'
import ProductVisual from '../components/ProductVisual'
import ProductCard from '../components/ProductCard'
import './Product.css'

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState('description')

  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="product-not-found container">
        <p>Produit introuvable.</p>
        <Link to="/catalogue">← Retour au catalogue</Link>
      </div>
    )
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 3)

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="breadcrumb container">
        <Link to="/">Accueil</Link>
        <span>/</span>
        <Link to="/catalogue">Soins</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      {/* Produit principal */}
      <div className="product-main container">
        {/* Visuel */}
        <div className="product-visual">
          <div className="product-visual__frame">
            <ProductVisual type={product.image} />
          </div>
          {product.tags.includes('bestseller') && (
            <div className="product-visual__badge">
              <span>Bestseller</span>
            </div>
          )}
        </div>

        {/* Infos */}
        <div className="product-info">
          <p className="product-info__category">{product.category}</p>
          <h1 className="product-info__name">{product.name}</h1>
          <p className="product-info__volume">{product.volume}</p>
          <p className="product-info__price">{product.price} €</p>

          <div className="product-info__tags">
            {product.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <p className="product-info__desc">{product.description}</p>

          <button
            className={`product-info__btn ${added ? 'product-info__btn--added' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? '✓ Ajouté au panier' : 'Ajouter au panier'}
          </button>

          <Link to="/panier" className="product-info__cart-link">
            Voir mon panier →
          </Link>

          {/* Tabs */}
          <div className="product-tabs">
            <div className="product-tabs__nav">
              {['description', 'utilisation', 'composition'].map(tab => (
                <button
                  key={tab}
                  className={`product-tabs__btn ${activeTab === tab ? 'product-tabs__btn--active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="product-tabs__content">
              {activeTab === 'description' && <p>{product.description}</p>}
              {activeTab === 'utilisation' && <p>{product.usage}</p>}
              {activeTab === 'composition' && (
                <p className="product-tabs__ingredients">{product.ingredients}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Produits associés */}
      <section className="product-related container">
        <div className="section__header">
          <p className="section__eyebrow">Vous aimerez aussi</p>
          <h2 className="section__title">Autres soins</h2>
        </div>
        <div className="product-grid product-grid--3">
          {related.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}
