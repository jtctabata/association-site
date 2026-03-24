import React from 'react'
import { contactConfig } from '../config.js'

export default function Contact() {
  return (
    <section className="contact-section section section-gray" id="contact">
      <div className="inner text-center">
        <h2 className="section-heading">{contactConfig.heading}</h2>
        <p className="contact-text">{contactConfig.text1}</p>
        <p className="contact-text contact-address">{contactConfig.text2}</p>
      </div>
    </section>
  )
}
