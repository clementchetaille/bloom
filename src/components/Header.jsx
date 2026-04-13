import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from './CartContext'
import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const { count } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = location.pathname === '/'

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${isHome ? 'header--home' : ''}`}>
      <div className="header__inner container">
        <nav className="header__nav">
          <NavLink to="/catalogue" className={({ isActive }) => isActive ? 'active' : ''}>
            Soins
          </NavLink>
          <NavLink to="/catalogue" className="">
            Rituels
          </NavLink>
        </nav>

        <Link to="/" className="header__logo">
          Bloom
        </Link>

        <div className="header__actions">
          <Link to="/catalogue" className="header__link">Découvrir</Link>
          <Link to="/panier" className="header__cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {count > 0 && <span className="header__badge">{count}</span>}
          </Link>
        </div>
      </div>
    </header>
  )
}
