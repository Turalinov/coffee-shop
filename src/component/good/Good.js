import ImgContent from '../imgContent/ImgContent';
import './Good.scss';

const Good = (props) => {
  console.log(props);

  const {src, ...itemsProps} = props.good

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