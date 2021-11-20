import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import { SearchBar } from './components/search-box/search-bar.component';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
   
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}));
  }
  onSearchChange = event => {
    this.state({searchField:event.target.value})
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField, title } = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <h1>Title</h1>
        <SearchBar placeholder='search aici' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
        {/* <CardList monsters={monsters}/> */}
      </div>
    );
  }
}
export default App;
