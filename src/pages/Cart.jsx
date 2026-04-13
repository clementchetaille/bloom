import { Link } from 'react-router-dom'
import { useCart } from '../components/CartContext'
import ProductVisual from '../components/ProductVisual'
import './Cart.css'

export default function Cart() {
  const { cart, removeFromCart, updateQty, total, count } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container cart-empty__inner">
          <p className="cart-empty__icon">✦</p>
          <h1 className="cart-empty__title">Votre panier est vide</h1>
          <p className="cart-empty__desc">Explorez notre collection et trouvez le soin qu'il vous faut.</p>
          <Link to="/catalogue" className="btn btn--primary">
            Découvrir les soins
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart">
      <div className="cart__hero container">
        <p className="cart__eyebrow">Mon panier</p>
        <h1 className="cart__title">{count} article{count > 1 ? 's' : ''}</h1>
      </div>

      <div className="cart__body container">
        {/* Liste */}
        <div className="cart__items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item__visual">
                <ProductVisual type={item.image} />
              </div>
              <div className="cart-item__info">
                <p className="cart-item__category">{item.category}</p>
                <p className="cart-item__name">{item.name}</p>
                <p className="cart-item__volume">{item.volume}</p>
              </div>
              <div className="cart-item__controls">
                <div className="cart-item__qty">
                  <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                </div>
                <p className="cart-item__price">{(item.price * item.qty).toFixed(2)} €</p>
                <button
                  className="cart-item__remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Récap */}
        <div className="cart__summary">
          <h2 className="cart__summary-title">Récapitulatif</h2>

          <div className="cart__summary-lines">
            <div className="cart__summary-line">
              <span>Sous-total</span>
              <span>{total.toFixed(2)} €</span>
            </div>
            <div className="cart__summary-line">
              <span>Livraison</span>
              <span>{total >= 80 ? 'Offerte' : '4,90 €'}</span>
            </div>
            {total < 80 && (
              <p className="cart__shipping-hint">
                Plus que {(80 - total).toFixed(2)} € pour la livraison offerte
              </p>
            )}
          </div>

          <div className="cart__summary-total">
            <span>Total</span>
            <span>{(total + (total >= 80 ? 0 : 4.90)).toFixed(2)} €</span>
          </div>

          <button className="cart__checkout-btn">
            Commander — projet fictif
          </button>

          <Link to="/catalogue" className="cart__continue">
            ← Continuer mes achats
          </Link>
        </div>
      </div>
    </div>
  )
}
