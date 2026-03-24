import React from 'react'
import { purposeConfig } from '../config.js'

export default function Purpose() {
  return (
    <section className="purpose section-gray" id="purpose">
      <div className="inner text-center">
        <h2 className="section-heading">{purposeConfig.heading}</h2>
        <h3 className="purpose-subheading">{purposeConfig.subheading}</h3>
        <p className="purpose-text">{purposeConfig.text}</p>
      </div>
    </section>
  )
}
