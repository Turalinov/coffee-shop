import { Fragment } from 'react';
import Devider from '../devider/Devider';
import './ImgContent.scss';

const ImgContent = (props) => {

  const {title, src} = props

  const content = props.content ? props.content : (
    <div className="img-content__good">
      <div className="img-content__country"><span>Country:</span> {props.country}</div>
      <div className="img-content__desc"><span>Description:</span> {props.desc}</div>
      <div className="img-content__price"><span>Price:</span> <span className='img-content__price-inner'>{props.price}$</span></div>
    </div>
  )

  return  (
    <div className="img-сontent">
      <div className="img-сontent__img-wrap">
          <img src={src} alt="" className="img-сontent__img" />
        </div>

        <div className="img-сontent__inner">
          <h2 className="dark">{title}</h2>
          <Devider dark/>
          <div className="img-сontent__content">
            {content}
          </div>
        </div>
    </div>
  )
}

export default ImgContent;