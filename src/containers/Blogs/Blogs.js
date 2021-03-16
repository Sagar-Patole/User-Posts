import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/Actions/index';
import Blog from '../../components/Blog/Blog';
import './Blogs.css';

class Blogs extends Component {
  state = {
    input: '',
  };

  componentDidMount() {
    this.props.onInitBlog();
  }

  blogSelectHandler = id => {
    this.props.history.push('/blogs/' + id);
  };

  render() {
    let blogList = null;
    if (this.props.blogs) {
      blogList = this.props.blogs
        .filter(blog => blog.userId === 1)
        .filter(blog =>
          blog.title.toLowerCase().startsWith(this.state.input.toLowerCase())
        )
        .map(blog => {
          return (
            <Blog
              key={blog.id}
              title={blog.title}
              body={blog.body}
              author="Leanne Graham"
              clicked={() => this.blogSelectHandler(blog.id)}
            />
          );
        });
    }
    return (
      <div className="Blogs">
        <div>
          <label htmlFor="title">Search By Title : </label>
          <input
            type="text"
            id="title"
            placeholder="Search By Title"
            onChange={event => {
              this.setState({ input: event.target.value });
            }}
            value={this.state.input}
          />
        </div>
        {blogList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs.blogs,
    error: state.blogs.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitBlog: () => dispatch(ActionCreators.initBlogs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
