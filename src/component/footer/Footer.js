import './Footer.scss';
import Nav from './../nav/Nav'
import Devider from '../devider/Devider';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <Nav dark/>
        <Devider dark/>
      </div>
    </footer>
  )
}

export default Footer;