import React from 'react'
import { aboutConfig } from '../config.js'

export default function About() {
  return (
    <section className="about-section section" id="about">
      <div className="inner">
        <h2 className="section-heading">{aboutConfig.heading}</h2>
        <dl className="about-table">
          {aboutConfig.rows.map((row) => (
            <div key={row.label} className="about-row">
              <dt className="about-label">{row.label}</dt>
              <dd className="about-value">
                {Array.isArray(row.value) ? (
                  <ul className="about-list">
                    {row.value.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
