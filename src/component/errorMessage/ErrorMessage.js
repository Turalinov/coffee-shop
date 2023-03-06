import img from './error.gif';

const ErrorMessage = () => {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <img 
      src={img} 
      style={{
        display: 'block',
        width: '250px',
        height: '250px',
        objectFit: 'contain',
        margin: '0 auto',
      }}
      alt="" />
      <div>
        Упс! Что-то пошло не так. Вы уверены что вы запустили json-server?
      </div>
    </div>
  )
}

export default ErrorMessage;