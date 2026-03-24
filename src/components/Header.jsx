import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { siteConfig, navLinks } from '../config.js'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // メニューを閉じる
  const closeMenu = () => setMenuOpen(false)

  // ルート変更時にメニューを閉じる
  useEffect(() => {
    closeMenu()
  }, [location])

  // スクロールロック
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // ナビリンク：同一ページのアンカーかページ遷移かを判定
  const handleNavClick = (e, href) => {
    e.preventDefault()
    closeMenu()
    if (location.pathname !== '/') {
      navigate('/' + href)
    } else {
      const target = document.querySelector(href)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="header-inner inner">
        {/* ロゴ・法人名 */}
        <Link to="/" className="header-logo" onClick={closeMenu}>
          {siteConfig.name}
        </Link>

        {/* PC ナビ */}
        <nav className="header-nav pc-nav" aria-label="グローバルナビゲーション">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header-nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* SP バーガーボタン */}
        <button
          className={`hamburger sp-nav ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* SP ドロワーメニュー */}
      <div
        className={`drawer-overlay ${menuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <nav
        className={`drawer ${menuOpen ? 'is-open' : ''}`}
        aria-label="スマートフォンナビゲーション"
      >
        <button className="drawer-close" onClick={closeMenu} aria-label="メニューを閉じる">
          ✕
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="drawer-link"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
