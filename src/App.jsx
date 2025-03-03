import './App.css'
import { NavLink } from "react-router";
import Button from './components/button/Button';

function App() {
  return (
      <div className='information-start'>
        <section className='section-start'>
        <h1 className='information-start-h1'>GUIATE CON NOSOTROS, TU SALUD EN UN SOLO LUGAR.</h1>
        <p className='information-start-p'>Comienza ahora con un <NavLink className="nav-link-quiz" to="quiz" end>Quiz</NavLink> interactivo fortalece tus conocimientos.</p>
        <p className='information-start-p'>
          Observa tu anatomía con modelos 3D, aprende más sobre tus enfermedades y funcionamiento de las partes de tu cuerpo.
        </p><Button text="Ver mas Enfermedades" width='250px' height='50px'/>
        </section>
        <div className='object-3d'>
          <h1>Imagen 3D intestino</h1>
        </div>
      </div>
  )
}

export default App;

