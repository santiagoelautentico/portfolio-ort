import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/works'>Trabajos</Link></li>
        <li><Link to='/about'>Sobre mi</Link></li>
        <li><Link to='/contact'>Contacto</Link></li>
      </ul>
    </nav>
  )
}