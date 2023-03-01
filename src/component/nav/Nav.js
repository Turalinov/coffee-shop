import './Nav.scss';

const Nav = (props) => {
  const clazz = props.dark ? 'dark' : '';

  return (
    <ul className={`nav ${clazz}`}>
      <li className="nav__item nav__item-main ">
        <a href="#" className="nav__link">
          Coffee house
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">Our coffee</a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">For your pleasure</a>
      </li>
    </ul>
  )
}

export default Nav;