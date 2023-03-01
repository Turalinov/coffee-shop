import './HeaderWrap.scss';

import Header from '../header/Header';

const HeaderWrap = (props) => {
  return (
    <section className="header-wrap" style={{backgroundImage: `url("${props.image}")`, }}>
      <div className="container">
        <Header/>
        <h1>
          {props.title}
        </h1>
      </div>
    </section>
  )
}

export default HeaderWrap;