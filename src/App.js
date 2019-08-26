import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import DataList from './components/DataList';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      data: [],
      isLoading: true,
    };
  }

  handleSearch = (title) => {
    this.setState({title: title});
  }

  // fetch src data from JSON url (on Github)
  //UNSAFE_componentWillMount()
  componentDidMount() {
    // Where we're fetching data from
    fetch(`https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          data: data.Reggae,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    // test fetch Json url
    //console.log(this.state.data); // array

    return (
      <div className="App">
        <SearchBar 
          title={this.state.title} 
          handleSearch={this.handleSearch}/>
        <DataList 
          data={this.state.data}
          title={this.state.title} 
          />
      </div>
    )
  }
}

export default App;

