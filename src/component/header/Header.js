import './Header.scss';
import images from '../../services/images';
import Nav from './../nav/Nav'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Nav/>
      </div>
    </header>
  )
}

export default Header;