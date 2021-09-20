import React, { Component } from 'react';
import UserDetails from './components/UserDetails'
import './index.css';
import { PROD_API } from './environment';
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      usersData: [],
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
      return <li key={user.id} onClick={()=>this.handleClick(user.id)}>{user.login}</li>
    })
    return (
      <>
        <div className="UserList">
          <h1>Random Asians</h1>
          <ul>{usersList}</ul>
        </div>
          <UserDetails user={this.state.selectedUser} />
      </>
    );
  }

  componentDidMount() {
    axios
      .get(PROD_API, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then(res => {
        this.setState({usersData: res.data.data})
      })
      .catch(err => console.log(err));
  }
}

export default App;