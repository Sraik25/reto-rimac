import React from 'react'
import '../assest/styles/components/Banner.scss'

const Banner = () => (
    <div className="banner">
        <div className="banner_tittle">
          <h1 className="banner_tittle--text">Seguro de <br/><strong>Salud</strong> </h1>
        </div>
        <div className="banner__tags">
          <div className="banner__tags_item">
            <span className="banner__tags_icon1"></span>
            <p>Cómpralo de manera fácil y rápida</p>
          </div>
          <div className="banner__tags_item">
            <span className="banner__tags_icon2"></span>
            <p>Cotiza y compra tu seguro 100% digital</p>
          </div>
          <div className="banner__tags_item">
            <span className="banner__tags_icon3"></span>
            <p>Hasta S/.12 millones de cobertura anual</p>
          </div>
          <div className="banner__tags_item">
            <span className="banner__tags_icon4"></span>
            <p>Más de 300 clínicas en todo el Perú</p>
          </div>
        </div>
        <div className="banner__illustrationFamily">
        </div> 
      </div>
)

export default Banner;