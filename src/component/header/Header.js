import './Header.scss';
import images from '../../services/images';
import Nav from './../nav/Nav'
console.log(images);

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