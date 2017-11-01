import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newFriends } from '../actions';

class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriends: ''
    };
    this.newFriends = this.newFriend.bind(this);
    this.updateNewFriends = this.updateNewFriends.bind(this);
  }

  newFriends(event) {
    event.preventDefault();
    this.props.newFriends({
      value: this.state.newFriends,
      complete: false
    });
    this.setState({
      newFriends: ''
    });
  }

  updateNewFriends(event) {
    this.setState({
      newFriend: event.target.value
    });
  }

  render() {
    return (
      <div className="FriendsForm">
        <form onSubmit={this.newFriends}>
          <input
            onChange={this.updateNewFriends}
            placeholder="new friend"
            value={this.state.newFriend}
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { addFriend })(FriendsForm);