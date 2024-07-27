import React from "react";
import { useEffect, useReducer } from "react"
import axios from 'axios' // first do 'npm install axios' - alternative to fetch
import { useUserContext } from "../context/UserContext";

export const SlideWork = () => {
//state

//function

//return
return (
    <div>
        <h1>Slide Work</h1>
    </div>
)


export const PostListReducer = () => {
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
}) [])
}
};
