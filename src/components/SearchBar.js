import React, { Component } from 'react'

export class SearchBar extends Component {

  handleOnChange = (e) => {
    //console.log(e.target.value);
    this.props.handleSearch(e.target.value);
  }

  render() {
    return (
      <form>
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
