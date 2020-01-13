import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Post from '../components/Post';
import Profile from '../components/Profile';

import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions';

class Home extends Component {
    
    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        const { posts, loading } = this.props.data;
        let recentPosts = !loading ? (
            posts.map((post) => <Post key={post.postId} post={post} />)
        ) : (
            <p>Loading....</p>
        );
        return (
            <Grid container spacing={10}>
                <Grid item sm={8} xs={12}>
                    {recentPosts}
                </Grid>
                <Grid item sm={4} xs={12}>
                     <Profile />
                </Grid>
            </Grid>
        );
    }
}

Home.propTypes = {
    getPosts: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    data: state.data
  });
  
  export default connect(
    mapStateToProps,
    { getPosts }
  )(Home);
