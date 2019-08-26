import React, { Component } from 'react';
import './SearchBar.css'

export class SearchBar extends Component {

  handleOnChange = (e) => {
    //console.log(e.target.value);
    this.props.handleSearch(e.target.value);
  }

  render() {
    return (
      <form className="SearchBarStyle">
        <h1>Search:</h1>
        <input 
          type="text" 
          placeholder='Search...'
          value={this.props.title}
          onChange={this.handleOnChange}/>
      </form>
    )
  }
}

export default SearchBar
