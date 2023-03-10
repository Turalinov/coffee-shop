import './Best.scss';
import Card from '../card/Card';

const Best = (props) => {

  const goods = props.data;

  const bestGoods = goods.filter(good => {
    return good.best;
  }).map(good => {
    const {id, ...itemProps} = good;
    return <Card
      key={id}
      forBest
      {...itemProps}
    />
  });
  
  return (
    <section className="best">
      <div className="container">
        <h2>Our best</h2>
        <ul className="best__cards">
          {bestGoods}
        </ul>
      </div>
    </section>
  )
}

export default Best;