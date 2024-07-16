import React from "react";
import { useEffect } from "react";
import { useReducer } from "react"; 
import { useEffect, useReducer } from "react"
import axios from 'axios' // first do 'npm install axios' - alternative to fetch

export const SlideWork = () => {


useEffect(() => {
    setTimeout(() => {
        body: "have update something else"
    }
    )
}
)

return (
    <div></div>
)




<div>
function ReducerCounter() {
    // useReducer takes a reducer function and the initial state value
    // returns array with the state variable and a dispatch function
    const [counter, dispatch] = useReducer(reducer, 0);
    const handleIncrement = () => {
        // we call the dispatch function to make all state updates
        dispatch({ type: "increment" });
};
    const handleDecrement = () => {
        // dispatch takes a single argument - object passed to reducer
        dispatch({ type: "decrement" });
};
    return (
       <div className="ReducerCounter componentBox">
          <h2>Count: {counter}</h2>
          <button onClick={handleIncrement}>Reducer Increment</button>
          <button onClick={handleDecrement}>Reducer Decrement</button>
</div> );
};
// see next slide for reducer function


const reducer = (state, action) => {
    switch (action.type) { // switch statements are common in reducers
        case "increment":
return state + 1;
case "decrement":
    return state - 1;
default:
    return state;
} };


const PostListReducer = () => {
    const [postsResult, dispatch] = useReducer(reducer, { // initial state for postsResult state variable
        loading: true, // true when loading and no data in posts
        posts: [], // empty until data is fetched
        error: '' // empty unless there was an error
})
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5') // modify this URL to test the error case
// continued on next slide
.then(response => {
    // object passed to dispatch holds all data needed for updating state: both type of update and associated data
    dispatch({ type: "FETCH_SUCCESS", payload: response.data }) // dispatch calls reducer function and triggers re-render
})
.catch(error => {
}) }, []);
}

};