import './Header.css'
import logo from '../images/logo.svg'

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='' />
      <h5>my travel journal.</h5>
    </div>
  );
}

export default Header;