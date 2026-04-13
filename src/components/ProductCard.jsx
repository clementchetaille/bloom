import { Link } from 'react-router-dom'
import ProductVisual from './ProductVisual'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const isBestseller = product.tags.includes('bestseller')

  return (
    <Link to={`/produit/${product.id}`} className="product-card">
      <div className="product-card__visual">
        <ProductVisual type={product.image} />
        {isBestseller && <span className="product-card__badge">Bestseller</span>}
        <div className="product-card__overlay">
          <span>Voir le produit</span>
        </div>
      </div>
      <div className="product-card__info">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">{product.price} €</p>
      </div>
    </Link>
  )
}
