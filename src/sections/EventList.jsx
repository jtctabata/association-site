import React from 'react'
import { Link } from 'react-router-dom'
import events from '../events.js'

export default function EventList() {
  return (
    <section className="events-section section section-gray" id="events">
      <div className="inner">
        <h2 className="section-heading">イベント</h2>
        <div className="events-grid">
          {events.map((ev) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EventCard({ event }) {
  const { id, image, eventDate, title, excerpt, updatedAt } = event
  const EXCERPT_LIMIT = 60

  return (
    <div className="event-card">
      {/* 画像エリア：画像なしの場合は非表示 */}
      {image && (
        <div className="event-card-image-wrap">
          <img src={import.meta.env.BASE_URL + image} alt={title} className="event-card-image" />

        </div>
      )}
      <div className="event-card-body">
        <p className="event-card-date">{eventDate}</p>
        <h3 className="event-card-title">{title}</h3>
        <p className="event-card-excerpt">
          {excerpt.length > EXCERPT_LIMIT ? excerpt.slice(0, EXCERPT_LIMIT) + '…' : excerpt}
          {excerpt.length > EXCERPT_LIMIT && (
            <Link to={`/events/${id}`} className="event-more-link"> もっと見る</Link>
          )}
        </p>
        <p className="event-card-updated">更新日：{formatDate(updatedAt)}</p>
        <Link to={`/events/${id}`} className="btn-detail">詳細を見る</Link>
      </div>
    </div>
  )
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}
