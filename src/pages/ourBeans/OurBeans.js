import images from '../../services/images';

import HeaderWrap from './../../component/headerWrap/HeaderWrap';
import Beans from './../../component/beans/Beans';
import Footer from './../../component/footer/Footer';
import Search from './../../component/search/Search';
import Filter from './../../component/filter/Filter';
import CardList from './../../component/cardList/CardList';

const OurBeans = (props) => {

  const {visibleData, onUptateSearch, onFilterSelect} = props

  return (
    <section className="our-beans">
      <HeaderWrap 
        image={images['bgOurCoffee.png']}
        title={'Our Coffee'}
      />
      <Beans/>
      <Footer/>
      <section className='search-filter-panel'>
        <div className="container">
          <Search onUptateSearch={onUptateSearch}/>
          <Filter onFilterSelect={onFilterSelect}/>
        </div>
      </section>
      <CardList data={visibleData}/>
      <Footer/>
    </section>
  )
}

export default OurBeans;