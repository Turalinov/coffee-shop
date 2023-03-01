import './CardList.scss';
import Card from '../card/Card';


const CardList = ({data}) => {
  

  const elements = data.map(item => {
    const {id, ...itemProps} = item;

    return (
      <Card
        key={id}
        {...itemProps}
      />
    )
  });


   return(
      <section className="card-list">
        <div className="container">          
          <ul className='card-list-items'>
            {elements}
          </ul>
        </div>
      </section>
    )
}


export default CardList;