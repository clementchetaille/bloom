import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">Bloom</p>
          <p className="footer__tagline">La beauté est un rituel,<br/>pas une habitude.</p>
        </div>

        <div className="footer__links">
          <p className="footer__title">Navigation</p>
          <Link to="/catalogue">Tous les soins</Link>
          <Link to="/catalogue">Rituels</Link>
          <Link to="/panier">Mon panier</Link>
        </div>

        <div className="footer__links">
          <p className="footer__title">Informations</p>
          <a href="#">Livraison</a>
          <a href="#">Retours</a>
          <a href="#">À propos</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© 2025 Bloom — Tous droits réservés</p>
        <p>Projet fictif — Portfolio Clément Chetaille</p>
      </div>
    </footer>
  )
}
