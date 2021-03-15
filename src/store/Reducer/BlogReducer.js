import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
  blogs: null,
  error: false,
  selectedBlog: null,
};

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BLOGS:
      return {
        ...state,
        blogs: action.blogList,
      };
    case actionTypes.FETCH_BLOGS_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.FETCH_SELECTED_BLOG:
      return {
        ...state,
        selectedBlog: action.selectedBlog,
      };
    case actionTypes.FETCH_SELECTED_BLOG_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default BlogReducer;
