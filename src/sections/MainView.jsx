import React from 'react'
import { mainViewConfig } from '../config.js'

export default function MainView() {
  const { heading, text, image, imageAlt } = mainViewConfig

  return (
    <section className="mainview">
      <div className="mainview-inner">        {/* SP：画像が先に来るため order で制御 */}
        <div className="mainview-text">
          <h2 className="mainview-heading">
            {heading.split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}{i < heading.split('\n').length - 1 && <br />}</React.Fragment>
            ))}
          </h2>
          <p className="mainview-body">
            {text.split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}{i < text.split('\n').length - 1 && <br />}</React.Fragment>
            ))}
          </p>
        </div>
        <div className="mainview-image-wrap">
          <img src={import.meta.env.BASE_URL + image} alt={imageAlt} className="mainview-image" />

        </div>
      </div>
    </section>
  )
}
