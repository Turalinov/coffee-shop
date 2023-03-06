import ImgContent from '../imgContent/ImgContent';
import './Good.scss';
import PropTypes from 'prop-types';

  
const Good = (props) => {

  const {src, ...itemsProps} = props.good

  //ошибка для проверки error boundary
  //a = 5;

  return (
    <section className="good">
      <div className="container">
        <ImgContent
          title='About it'
          src ={src}
          content={
            <View {...itemsProps}/>
          }
        />
      </div>
    </section>
  )
}

const View = (props) => {
    return (
      <div className="img-content__good">
        <div className="img-content__country"><span>Country:</span> {props.country}</div>
        <div className="img-content__desc"><span>Description:</span> {props.desc}</div>
        <div className="img-content__price"><span>Price:</span> <span className='img-content__price-inner'>{props.price}$</span></div>
      </div>
    )
  }
  

Good.propTypes = {
  good: PropTypes.object.isRequired
}

export default Good;