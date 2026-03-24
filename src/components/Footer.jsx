import React from 'react'
import { siteConfig, footerConfig } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner inner">
        <h2 className="footer-heading">{footerConfig.heading}</h2>
        <p className="footer-text">{footerConfig.text1}</p>
        <p className="footer-text">{footerConfig.text2}</p>
        <p className="footer-copy">{siteConfig.copyright}</p>
      </div>
    </footer>
  )
}
