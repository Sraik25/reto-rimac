import React from 'react'
import {Link} from 'react-router-dom'
import Banner2 from '../components/Banner2';
import Header2 from '../components/Header2';

const Empecemos = () => {
  return(
    <React.Fragment>
      <Header2/>
      <Banner2/>
      <div className="main">
        <div className="main__pages">
          <span className="main__pages__icon"></span>
          <p className="main__pages__description"> <span> PASO 1</span>  DE 7</p>
        </div>
        <div className="main__information__people">
          <h3 className="main__information__person">Hola, <span>¡empecemos!</span></h3>
          <p className="main__information__description">
          Cuentanos un poco sobre ti.
          </p>
        </div>

        <form className="main__form">
          <h6 className="main__form__tittle">Ingresa tu nombre</h6>
          
          <div className="main__input_identification">
            <label for="">Nombres Apellidos</label>
            <input type="text" placeholder="Nombre" />
          </div>
          
          <div className="main__Familia">
            <label className="main__Familia__description" for="">¿A quién vamos a asegurar?</label><br/>
            <div className="main__Familia__radio__container">
              <input type="radio" id="me" name="pople" value="me" />
              <label className="main__Familia__radio__container_t" for="male">Solo a mí</label><br />
              <input type="radio" id="other" name="pople" value="other" />
              <label className="main__Familia__radio__container_t" for="female">A mí y a mi familia</label><br />
            </div>
          </div>
          <div className="main__more_families">
            <h6 className="main__add_family__description ">Datos de los familiares:</h6>
            <div className="main__add_family">
              <div className="main__add_family_dates">
                <select name="" id="">
                  <option value="dni">Vínculo</option>
                  <option value="ruc">Cónyuge</option>s
                  <option value="ruc">Hijo</option>
                </select>
                <input type="text" placeholder="Nro. de Documento" />
                <span className="main__add_calendar"></span>
              </div>
              <input type="button" className="main__add_family__btn" value="AGREGAR"></input>
            </div>
            <div className="main_list__add__family">
                <div className="list__dates">
                  <label for="">ssss</label>
                  <label for="">ssss</label>
                </div>
                <input type="button" className="main__add_family__btn" value="ELIMINAR"></input>
            </div>
            <div className="main_list__add__family">
                <div className="list__dates">
                  <label for="">ssss</label>
                  <label for="">ssss</label>
                </div>
                <input type="button" className="main__add_family__btn" value="ELIMINAR"></input>
            </div>

          </div>
          <Link to='/gracias'>
            <button className="form__button">CONTINUAR</button>
          </Link>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Empecemos;