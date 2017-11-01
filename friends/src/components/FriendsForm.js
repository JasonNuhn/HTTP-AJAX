import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFriends, getFriends } from '../actions';

class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: '',
      newAge: '',
      newEmail: '',
    };
    this.updateNewName = this.updateNewName.bind(this);
    this.updateNewAge = this.updateNewAge.bind(this);
    this.updateNewEmail = this.updateNewEmail.bind(this);
    this.addFriends = this.addFriends.bind(this);
  }

  addFriends(event) {
    event.preventDefault();
    this.props.addFriends({
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail,
    });
    this.setState({
      newName: '',
      newAge: '',
      newEmail: '',
    });
  }

  updateNewName(event) {
    this.setState({
      newName: event.target.value,
    });
  }

  updateNewAge(event) {
    this.setState({
      newAge: event.target.value,
    });
  }

  updateNewEmail(event) {
    this.setState({
      newEmail: event.target.value
    });
  }

  render() {
    return (
      <div className="FriendsForm">
        <form onSubmit={this.addFriends}>
          <input
            onChange={this.updateNewName}
            placeholder="new name"
            value={this.state.name}
          />
          <input
            onChange={this.updateNewAge}
            placeholder="new age"
            value={this.state.age}
          />
          <input
            onChange={this.updateNewEmail}
            placeholder="new email"
            value={this.state.email}
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { addFriends, getFriends })(FriendsForm);