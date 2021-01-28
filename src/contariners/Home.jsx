import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import '../assest/styles/components/Home.scss'


const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner/>
      <div className="Formulario">
        <div className="formulario_description">
          <h2 className="formulario_description_h2">Obtén tu <span>seguro  ahora</span></h2>
          <h4 className="formulario_description_h4">Ingresa los datos para comenzar.</h4>
        </div>
        <form  className="formulario__Login">
          <div className="Fomulario_contariner" >
            <select className="formulario__Login--identificacion" name="" id="">
              <option value="dni">DNI</option>
              <option value="ruc">RUC</option>
            </select>
            <div className="formulario__Login__line"> </div>
            <input className="formulario__Login_input" type="text" placeholder="Nro. de documento" />
          </div>
          <div className="Fomulario_contariner">
            <input className="fomulario_Fecha_Nacimiento" type="text" placeholder="Fecha de nacimiento" />
            <div className="icon__contariner">
              <span className="formulario_icon"></span>
            </div>
          </div>
          <div class="Fomulario_contariner">
            <input class="formulario_celular" type="text" placeholder="Celular"/>
          </div>
          <div class="Fomulario_contariner_checks">
            <input class="check" type="checkbox" name="" id="" />
            <label>
              Acepto la <span><a href="/">Política de Protección de Datos Personales y los Términos y Condiciones.</a></span> 
            </label>
          </div>
          <div class="Fomulario_contariner_checks">
            <input class="check" type="checkbox" name="" id="" />
            <label class="Fomulario_contariner_checks_label">
              Acepto la <span> <a href="/">Política de Envío de <br/> Comunicaciones Comerciales.</a> </span> 
            </label>
          </div>
            <Link to='/agregarparientes'>
            <button 
              class="button"
              >
                COMENCEMOS
            </button>
            </Link>
         
        </form>
      </div>

    </React.Fragment>
  )
}

export default Home;