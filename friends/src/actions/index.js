import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const NEW_NAME = 'NEW_NAME';
export const NEW_AGE = 'NEW_AGE';
export const NEW_EMAIL = 'NEW_EMAIL';
export const ADD_FRIEND = 'ADD_FRIEND';

export const getFriends = () => {
    // Add the code for this action
    const friendsEndpoint = 'http://localhost:5000/friends';
    const friends = axios.get(friendsEndpoint);

    console.log('friends', friends);

    return {
        type: GET_FRIENDS,
        payload: friends,
    }
};

export const addFriends = (friend) => {
    const friendsEndpoint = 'http://localhost:5000/new-friend';
    const friends = axios.post(friendsEndpoint, friend);
    
    return {
        type: ADD_FRIEND,
        payload: friend
    }
}