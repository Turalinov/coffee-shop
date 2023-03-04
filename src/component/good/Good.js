import ImgContent from '../imgContent/ImgContent';
import './Good.scss';

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
          {...itemsProps}
        />
      </div>
    </section>
  )
}

export default Good;