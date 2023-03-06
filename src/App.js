//main
import {Component} from 'react';
import './App.css';

//pages
import MainPage from './pages/mainPage/MainPage';
import OurBeans from './pages/ourBeans/OurBeans';
import AboutIt from './pages/aboutIt/AboutIt';
import AboutGoods from './pages/aboutGoods/AboutGoods';

//helpers
import DbServices from './services/DbServices';
import ErrorBoundary from './component/errorBoundary/ErrorBoundary';
import ErrorMessage from './component/errorMessage/ErrorMessage';

class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    data: null,
    term: '',
    filter: '',
    error: false,
  }


  dbService = new DbServices();

  componentDidMount(){
    this.updateGoods();
  }
  
  onGoodsLoaded = (data) => {
    this.setState({data})
  }

  onError = () => {
    this.setState({
      error: true
    })
  }

  updateGoods = () => {
    this.dbService.getAllGoods()
      .then(this.onGoodsLoaded)
      .catch(this.onError)
  };


  onUptateSearch = (term) => {
    this.setState({term})
  }

  onFilterSelect = (filter) => {
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

  view = ({data, visibleData}) => {
    return (
      <div className="App">
      <ErrorBoundary>
        <MainPage data={data}/>
      </ErrorBoundary>

      <ErrorBoundary>
        <OurBeans 
            visibleData={visibleData}
            onUptateSearch={this.onUptateSearch}
            onFilterSelect={this.onFilterSelect}
            />
      </ErrorBoundary>

      <ErrorBoundary>
        <AboutIt data={data}/>
      </ErrorBoundary>


      <ErrorBoundary>
        <AboutGoods data={data}/>
      </ErrorBoundary>
      
    </div>
  )
}

  
  render () {
    const {data, term, filter, error} = this.state
    const visibleData = this.filterPost(this.searchGoods(data, term), filter);

    const errorMessage = error ? <ErrorMessage/> : null;

    const content = data ? this.view({data, visibleData}) : null;

    
    return (
      <>
        {errorMessage}
        {content}
      </>
    );
    
    
  }
  
}



export default App;
