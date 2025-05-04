import React from 'react';
import axios from 'axios';
 
export default class UsersPage extends React.Component {
  state: { users: { id: number; name: string; username: any; email: any; address: any; street: string; suite:any; city:string; zipcode: number; geo: number }[] } = {
    users: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.users
            .map(user =>
              <li key={user.id}>{user.name}{user.username}{user.email}</li>
            )
        }
      </ul>
    )
  }
}