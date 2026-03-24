import React, { useEffect } from 'react'

export default function Modal({ src, alt, onClose }) {
  // Escキーで閉じる
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <button className="modal-close" onClick={onClose} aria-label="閉じる">✕</button>
      <img
        className="modal-image"
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
