import React, { Component } from 'react';
// we are importing our axios instance here, not axios
import axiosInstance from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentWillMount () {
        // So axios and axiosInstance uses promises and GET returns a promise
        axiosInstance.get('/posts')
        // then is simply a method which takes a function as the input and this function will
        // get executed once the promise resolves.
        .then( response => {
            const post = response.data.slice(0,4);
            const updatedPost = post.map( post => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            this.setState({ posts: updatedPost });
        })
        // The catch method, as the names suggests, this catches any errors you get.
        .catch( error => {
            // console.log(error);
            this.setState({ error:true });
        });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId : id });
    }

    render () {

        let posts = <p style={{textAlign:'center'}}> Something went wrong </p>
        // if our state error is null we will override our post variable
        if (!this.state.error){
            posts = this.state.posts.map( (post, index) => {
                return <Post
                    title={post.title} 
                    author={post.author} 
                    key={post.id}
                    // We can pass post ID as an argument to any method
                    clicked={ () => this.postSelectedHandler(post.id)} />
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
        
    }
}

export default Blog;