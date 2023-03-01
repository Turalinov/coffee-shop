import {Component} from 'react';
import './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    }
  }

  onUptateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUptateSearch(term);
  }


  render() {
    return (
      <div className="search">
        <label htmlFor="search__input" className='search__label'>Looking for</label>
        <input type="text" 
          id="search__input" 
          className="search__input" 
          value = {this.state.term}
          onChange = {this.onUptateSearch}
          placeholder="start typing here" />
      </div>
    );
  }
}

export default Search;