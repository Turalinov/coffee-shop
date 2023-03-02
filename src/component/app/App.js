import {Component} from 'react';
import './App.css';


import images from './../../services/images';
import DbServices from '../../services/DbServices';

import Hero from '../hero/Hero';
import About from '../about/About';
import Best from '../best/Best';
import Footer from '../footer/Footer';
import HeaderWrap from '../headerWrap/HeaderWrap';
import Beans from '../beans/Beans';
import Search from '../search/Search';
import Filter from '../filter/Filter';
import CardList from '../cardList/CardList';
import Good from '../good/Good';
import OurGoods from '../ourGoods/OurGoods';





class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    data: [],
    term: '',
    filter: '',
  }


  dbService = new DbServices();

  componentDidMount() {
    this.updateGoods();
  }
  
  onGoodsLoaded = (data) => {
    this.setState({data})
  }

  updateGoods = () => {
    this.dbService.getAllGoods()
      .then((data) => {
        console.log(data);
        this.onGoodsLoaded(data)
      })
  };


  onUptateSearch = (term) => {
    this.setState({term})
  }

  onFilterSelect = (filter) => {
    console.log(filter);
    this.setState({filter})
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'Brazil':
        return items.filter(item => item.country == 'Brazil')
        break;
      case 'Kenya':
        return items.filter(item => item.country == 'Kenya')
        break;
      case 'Columbia':
        return items.filter(item => item.country == 'Columbia')
        break;
    
      default:
        return items;
        break;
    }

  }

  searchGoods(items, term) {

    if (term.length === 0 ) {
      return items;
    }

    return items.filter(item => {
        return item.name.indexOf(term) > -1;
    });
  }

  
  render () {
    const {data, term, filter} = this.state
    const visibleData = this.filterPost(this.searchGoods(data, term), filter);

    return (
      <div className="App">
        <section className="main-page">
          <Hero/>
          <About/>
          <Best data={data}/>
          <Footer/>
        </section>
        <section className="our-beans">
          <HeaderWrap 
            image={images['bgOurCoffee.png']}
            title={'Our Coffee'}
          />
          <Beans/>
          <Footer/>
          <section className='search-filter-panel'>
            <div className="container">
              <Search onUptateSearch={this.onUptateSearch}/>
              <Filter onFilterSelect={this.onFilterSelect}/>
            </div>
          </section>
          <CardList data={visibleData}/>
          <Footer/>
        </section>
        <section className='about-it'>
          <HeaderWrap 
            image={images['bgOurCoffee.png']}
            title={'Our Coffee'}
          />
          <Good good={data[0]}/>
          <Footer/>
        </section>
        <div className="about-goods">
          
          <HeaderWrap 
            image={images['bgGoods.png']}
            title={'For your pleasure'}
          />
          <OurGoods/>
          <CardList data={data}/>
          <Footer/>
        </div>
      </div>
    );
  }
  
}

export default App;
