import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import events from '../events.js'
import Modal from '../components/Modal.jsx'

export default function EventDetail() {
  const { id } = useParams()
  const item = events.find((e) => e.id === Number(id))
  const [modalOpen, setModalOpen] = useState(false)

  if (!item) {
    return (
      <div className="not-found inner">
        <p>イベントが見つかりませんでした。</p>
        <Link to="/" className="back-link">← トップへ戻る</Link>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <div className="detail-inner inner">
        {/* 2カラム：画像あり／なしで切り替え */}
        <div className={`detail-layout ${!item.image ? 'no-image' : ''}`}>

          {/* 左カラム：画像（画像なしの場合は非表示） */}
          {item.image && (
            <div className="detail-image-col">
              <img
                src={item.image}
                alt={item.title}
                className="detail-thumb"
                onClick={() => setModalOpen(true)}
              />
              <p className="detail-image-hint">クリックで拡大</p>
            </div>
          )}

          {/* 右カラム：テキスト */}
          <div className="detail-text-col">
            <h1 className="detail-title">{item.title}</h1>
            <p className="detail-event-date">
              <span className="detail-label">開催期間</span>
              {item.eventDate}
            </p>
            <div className="detail-body">
              {item.body.split('\n').map((line, i) => (
                <p key={i}>{line || <br />}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-back">
          <Link to="/" className="back-link">← イベント一覧へ戻る</Link>
        </div>
      </div>

      {/* 画像モーダル */}
      {modalOpen && (
        <Modal src={item.image} alt={item.title} onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}
