import React from 'react'
import Banner2 from '../components/Banner2'
import {Link} from 'react-router-dom'
import '../assest/styles/components/AddFamily.scss'
import Header2 from '../components/Header2'

const AddFamily = () => {


  return (
    <React.Fragment>
      <Header2/>
      <Banner2/>
      <div className="main">
        <div className="main__pages">
          <span className="main__pages__icon"></span>
          <p className="main__pages__description"> <span> PASO 1</span>  DE 7</p>
        </div>
        <div className="main__information__people">
          <h3 className="main__information__person">Hola, <span>Olek</span></h3>
          <p className="main__information__description">
            Valida que los datos sean correctos.
          </p>
        </div>
      
        <form className="main__form">
          <h6 className="main__form__tittle">Datos personales del titular</h6>
          <div className="main__input_identification_t">
            <select   name="" id="">
              <option value="dni">DNI</option>
              <option value="ruc">Ruc</option>
            </select>
            <input
              className="main__input_identification_t__input"
              type="text"
              placeholder="Nro. de Documentos"
            />
          </div>
          <div className="main__input_identification">
            <label >Nombre</label>
            <input type="text" placeholder="Nombre" />
          </div>
          <div className="main__input_identification">
            <label >Apellido Paterno</label>
            <input type="text" placeholder="Apellido Paterno" />
          </div>
          <div className="main__input_identification">
            <label >Apellido Materno</label>
            <input type="text" placeholder="Apellido Materno" />
          </div>
          <div className="main__input_identification">
            <label >Fecha de Nacimiento</label>
            <input type="text" placeholder="Fecha de Nacimiento" />
          </div>
          <div className="main__genero_radio">
            <label className="main__genero_radio__description" >Genero:</label><br/>
            <div className="main__genero_radio__contariner">
              <input type="radio" id="male" name="gender" value="male" />
              <label className="main__genero_radio__contariner_t" >Masculino</label><br/>
              <input type="radio" id="female" name="gender" value="female" />
              <label className="main__genero_radio__contariner_t" >Femenino</label><br />
            </div>
          </div>
          <div className="main__Familia">
            <label className="main__Familia__description" >¿A quién vamos a asegurar?</label><br/>
            <div className="main__Familia__radio__container">
              <input type="radio" id="me" name="pople" value="me" />
              <label className="main__Familia__radio__container_t" >Solo a mí</label><br />
              <input type="radio" id="other" name="pople" value="other" />
              <label className="main__Familia__radio__container_t" >A mí y a mi familia</label><br />
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
                  <label >ssss</label>
                  <label >ssss</label>
                </div>
                <input type="button" className="main__add_family__btn" value="ELIMINAR"></input>
            </div>
            <div className="main_list__add__family">
                <div className="list__dates">
                  <label >ssss</label>
                  <label >ssss</label>
                </div>
                <input type="button" className="main__add_family__btn" value="ELIMINAR"></input>
            </div>
      
          </div>
          <Link to='/empecemos'>
            <button className="form__button">CONTINUAR</button>
          </Link >
        </form>
      </div>
    </React.Fragment>
  )
}

export default AddFamily;