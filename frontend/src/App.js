import React, { Component } from 'react';
import UserDetails from './components/UserDetails';
import UserForm from './components/UserForm';
import './App.css';
import { GET_USERS } from './routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usersData: [],
      createUserPicture: null,
      error: null,
      selectedUser: null
    };
  }

  handleClick = (name) => {
    const selectedUser = this.state.usersData.find(user => user.name === name)
    this.setState(() => ({selectedUser}))
  }

  render() {
    const usersList = this.state.usersData.map(user => {
      return<li key={user.name} onClick={()=>this.handleClick(user.name)}>{user.name}</li>
    })
    return (
      <div className="App"> 
        <div className="UserList">
          <h2>Random Asians</h2>
          <ul>{usersList}</ul>
        </div>
        <UserDetails user={this.state.selectedUser} />
        <UserForm />
      </div>
    );
  }

  componentDidMount() {
    GET_USERS()
      .then(res => {
        this.setState({usersData: res.data.data})
      })
      .catch(err => console.log(err));
  }
}

export default App;