import * as actionTypes from '../ActionTypes';
import axios from 'axios';

export const fetchBlogs = blogList => {
  return {
    type: actionTypes.FETCH_BLOGS,
    blogList: blogList,
  };
};

export const fetchBlogsFailed = () => {
  return {
    type: actionTypes.FETCH_BLOGS_FAILED,
  };
};

export const fetchSelectedBlog = data => {
  return {
    type: actionTypes.FETCH_SELECTED_BLOG,
    selectedBlog: data,
  };
};

export const fetchSelectedBlogFailed = () => {
  return {
    type: actionTypes.FETCH_SELECTED_BLOG_FAILED,
  };
};

export const initBlogs = () => {
  return dispatch => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch(fetchBlogs(response.data));
      })
      .catch(error => {
        dispatch(fetchBlogsFailed());
      });
  };
};

export const initSelectedBlog = id => {
  return dispatch => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => {
        dispatch(fetchSelectedBlog(response.data));
      })
      .catch(error => {
        dispatch(fetchSelectedBlogFailed());
      });
  };
};
