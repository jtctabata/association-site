import React from 'react'
import { Link } from 'react-router-dom'
import news from '../news.js'

export default function NewsList() {
  // トップページには最新3件表示
  const latest = news.slice(0, 3)

  return (
    <section className="news-section section" id="news">
      <div className="inner">
        <h2 className="section-heading">ニュース</h2>
        <div className="news-list">
          {latest.map((item) => (
            <article key={item.id} className="news-item">
              <hr className="news-divider" />
              <div className="news-row">
                <time className="news-date" dateTime={item.date}>
                  {formatDate(item.date)}
                </time>
                <div className="news-content">
                  <Link to={`/news/${item.id}`} className="news-title">
                    {item.title}
                  </Link>
                  <p className="news-excerpt">{item.body.slice(0, 80)}…</p>
                </div>
              </div>
            </article>
          ))}
          <hr className="news-divider" />
        </div>
      </div>
    </section>
  )
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}
