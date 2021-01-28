import React from 'react'
import {Link} from 'react-router-dom'
import Banner2 from './Banner2'
import Header2 from './Header2'
import Joven from '../assest/static/images/Illustration.png'
import '../assest/styles/components/Gracias.scss'

const Gracias = () => (
    <React.Fragment>
      <Header2/>
      <Banner2/>
      <div className="aside">
        <img src={Joven} alt="" />
        <h3 className="aside__title">
          ¡Gracias por <span>confiar en nosotros!</span> 
        </h3>
        <p className="aside__description">
          Queremos conocer mejor la salud de los asegurados. Un asesor se pondrá en contacto contigo en las siguientes 48 horas.
        </p>
        <Link to='/'>
          <button className="aside__goHome">
            IR A SALUD RIMAC
          </button>
        </Link>
        
      </div>
      
    </React.Fragment>
)

export default Gracias;