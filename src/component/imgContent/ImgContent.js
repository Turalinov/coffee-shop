import Devider from '../devider/Devider';
import './ImgContent.scss';

const ImgContent = (props) => {

  return  (
    <div className="img-сontent">
      <div className="img-сontent__img-wrap">
          <img src={props.src} alt="" className="img-сontent__img" />
        </div>

        <div className="img-сontent__inner">
          <h2 className="dark">{props.title}</h2>
          <Devider dark/>
          <div className="img-сontent__content">
            {props.content}
          </div>
        </div>
    </div>
  )
}

export default ImgContent;