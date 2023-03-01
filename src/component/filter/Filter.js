
import Button from '../button/Button';
import './Filter.scss';

const Filter = (props) => {

  const {filter} = props;

  const btnsData = [ 
    {name: 'Brazil'},
    {name: 'Kenya'},
    {name: 'Columbia'},
  ]

  const btns = btnsData.map(({name} )=> {

    const active = filter === name;
    const clazz = active ? 'active' : ''

    return (
       <Button 
          className={clazz}
          key={name}
          text={name}
          handlerClick={() => props.onFilterSelect(name)}
        />
    )
  })
  
    return (
      <div className="filter">

        <div className="filter__title">Or filter</div>

        <div className="filter__btns">
          {btns}
        </div>

      </div>
    );
}

export default Filter;