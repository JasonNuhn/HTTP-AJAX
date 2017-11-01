import {
    ADD_FRIEND,
    // TOGGLE_COMPLETE
  } from '../actions';
  
  export default (friends = [], action) => {
    switch (action.type) {
      case ADD_FRIEND:
        return action.payload.data;
    //   case TOGGLE_COMPLETE:
    //     const newTodos = todos.slice(0);
    //     newTodos[action.payload].complete = !newTodos[action.payload].complete;
    //     return newTodos;
      default:
        return friends;
    }
  }