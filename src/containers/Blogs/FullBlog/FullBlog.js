import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../../../store/Actions/index';
import './FullBlog.css';

class FullBlog extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.onInitSelectedBlog(this.props.match.params.id);
  }

  componentDidUpdate() {
    // this.props.onInitSelectedBlog(this.props.match.params.id);
  }

  render() {
    let blog = null;
    if (this.props.selectedBlog) {
      blog = (
        <div className="card mx-auto" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{this.props.selectedBlog.title}</h5>
            <p className="card-text">{this.props.selectedBlog.body}</p>
            <Link to="/blogs/" className="card-link">
              Go Back
            </Link>
          </div>
        </div>
      );
    }
    return <div className="FullBlog">{blog}</div>;
  }
}

const mapStateToProps = state => {
  return {
    selectedBlog: state.blogs.selectedBlog,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitSelectedBlog: id => dispatch(actionCreators.initSelectedBlog(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullBlog);
