import {
    NEW_FRIENDS,
    // TOGGLE_COMPLETE
  } from '../actions';
  
  export default (friends = [], action) => {
    switch (action.type) {
      case NEW_FRIENDS:
        return friends.concat(action.payload);
    //   case TOGGLE_COMPLETE:
    //     const newTodos = todos.slice(0);
    //     newTodos[action.payload].complete = !newTodos[action.payload].complete;
    //     return newTodos;
    //   default:
        return friends;
    }
  }