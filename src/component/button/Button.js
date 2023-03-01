import './Button.scss';

const Button = (props) => {

  const handler = props.handlerClick ? props.handlerClick : null;

  return (
    <button type="button" 
      className="btn"
      onClick={handler}
      >
      {props.text}
    </button>
  )
}

export default Button;
