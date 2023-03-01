import './Devider.scss';;

const Devider = (props) => {

  const clazz = props.dark ? 'devider-dark' : '';

  return (
    <div className={`devider ${clazz}`}>
    </div>
  )
}

export default Devider;