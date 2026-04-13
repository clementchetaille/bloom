import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import './Home.css'

export default function Home() {
  const featured = products.filter(p => p.tags.includes('bestseller'))

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
        </div>
        <div className="hero__content container">
          <p className="hero__eyebrow">Cosmétiques de luxe</p>
          <h1 className="hero__title">
            La beauté<br />
            <em>qui s'épanouit</em>
          </h1>
          <p className="hero__subtitle">
            Des formules botaniques précieuses,<br />
            pensées pour révéler l'éclat naturel de votre peau.
          </p>
          <div className="hero__cta">
            <Link to="/catalogue" className="btn btn--primary">
              Découvrir la collection
            </Link>
            <Link to="/catalogue" className="btn btn--ghost">
              Nos rituels →
            </Link>
          </div>
        </div>
        <div className="hero__scroll">
          <span />
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="section container">
        <div className="section__header">
          <p className="section__eyebrow">Bestsellers</p>
          <h2 className="section__title">Les favoris</h2>
          <Link to="/catalogue" className="section__link">Voir tout →</Link>
        </div>
        <div className="product-grid product-grid--2">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* BANNIÈRE MILIEU */}
      <section className="banner">
        <div className="banner__inner container">
          <div className="banner__text">
            <p className="section__eyebrow">Notre philosophie</p>
            <h2 className="banner__title">
              La science<br /><em>au service de la nature</em>
            </h2>
            <p className="banner__desc">
              Chaque formule Bloom est le fruit d'un équilibre entre actifs botaniques rares
              et biotechnologie avancée. Sans compromis sur l'efficacité, ni sur l'éthique.
            </p>
            <Link to="/catalogue" className="btn btn--primary">
              Explorer les soins
            </Link>
          </div>
          <div className="banner__visual">
            <div className="banner__circle" />
            <p className="banner__stat"><strong>100%</strong><span>Naturel</span></p>
            <p className="banner__stat"><strong>0</strong><span>Parabène</span></p>
            <p className="banner__stat"><strong>6</strong><span>Références</span></p>
          </div>
        </div>
      </section>

      {/* TOUS LES PRODUITS */}
      <section className="section container">
        <div className="section__header">
          <p className="section__eyebrow">La collection</p>
          <h2 className="section__title">Tous les soins</h2>
          <Link to="/catalogue" className="section__link">Voir le catalogue →</Link>
        </div>
        <div className="product-grid product-grid--3">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}
