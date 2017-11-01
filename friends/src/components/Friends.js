import React from 'react';
import { connect } from 'react-redux';
// import Todo from './Todo';

const Friends = (props) => {
  const friends = props.friends.map((friend, i) => <Friends friend={friend} key={i} index={i} />);
  return (
    <ul>
      { friends }
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps)(Friends);