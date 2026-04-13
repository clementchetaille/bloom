import { useState } from 'react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import './Catalogue.css'

export default function Catalogue() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="catalogue">
      <div className="catalogue__hero container">
        <p className="catalogue__eyebrow">Collection 2025</p>
        <h1 className="catalogue__title">Tous les soins</h1>
        <p className="catalogue__subtitle">
          {products.length} références — formules botaniques de luxe
        </p>
      </div>

      <div className="catalogue__body container">
        {/* Filtres */}
        <div className="catalogue__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compteur */}
        <p className="catalogue__count">
          {filtered.length} produit{filtered.length > 1 ? 's' : ''}
        </p>

        {/* Grille */}
        <div className="product-grid product-grid--3">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}
