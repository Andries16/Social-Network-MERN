import axios from 'axios'

const url = "http://127.0.0.1:5000/posts";
export const fetchPosts = ()=>axios.get(url);