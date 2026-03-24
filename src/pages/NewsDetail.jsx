import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import news from '../news.js'
import Modal from '../components/Modal.jsx'

export default function NewsDetail() {
  const { id } = useParams()
  const item = news.find((n) => n.id === Number(id))
  const [modalOpen, setModalOpen] = useState(false)

  if (!item) {
    return (
      <div className="not-found inner">
        <p>ニュースが見つかりませんでした。</p>
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
            <time className="detail-date" dateTime={item.date}>{formatDate(item.date)}</time>
            <h1 className="detail-title">{item.title}</h1>
            <div className="detail-body">
              {item.body.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-back">
          <Link to="/#news" className="back-link">← ニュース一覧へ戻る</Link>
        </div>
      </div>

      {/* 画像モーダル */}
      {modalOpen && (
        <Modal src={item.image} alt={item.title} onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}
