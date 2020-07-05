import React,{ Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }
  }
  handleChange=(e) =>{
    this.setState({searchField:e.target.value});
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((user) => { this.setState({ monsters:user }) })
  }
  render(){
    const { monsters,searchField }=this.state;
    let filteredList=monsters.filter((monster) =>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='Search Monster...' handleChange={ this.handleChange } ></SearchBox>
      <CardList monsters={ filteredList }></CardList>
   
      </div>
    );
  }
}
export default App;
