import React, { Component } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';


export class Home extends Component {
    state = {
        posts: null
    }
    componentDidMount() {
        axios.get('https://us-central1-heyoo-9a975.cloudfunctions.net/api/posts')
            .then(res => {
                console.log(res.data)
                this.setState({
                    posts: res.data 
                });
            })
            .catch(err => console.log(err));
    }
    render() {
        let recentPosts = this.state.posts ? (
            this.state.posts.map(post => <p>{post.body}</p>)
        ) : <p>Loading...</p>
        return (
            <Grid container spacing={10}>
                <Grid item sm={8} xs={12}>
                    {recentPosts}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Profile</p>
                </Grid>
            </Grid>
        )
    }
}

export default Home
