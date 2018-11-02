import React, { Component } from 'react';
// we are importing our axios instance here, not axios
import axiosInstance from '../../../axios';
import { Route, Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';


class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        // Axios and axiosInstance uses promises and GET returns a promise
        axiosInstance.get('/posts')
            // then is simply a method which takes a function as the input and this function will
            // get executed once the promise resolves.
            .then(response => {
                const post = response.data.slice(0, 4);
                const updatedPost = post.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPost });
            })
            // The catch method, as the names suggests, this catches any errors you get.
            .catch(error => {
                // console.log(error);
                //this.setState({ error:true });
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render() {

        let posts = <p style={{ textAlign: 'center' }}> Something went wrong </p>
        // if our state error is null we will override our post variable
        if (!this.state.error) {
            posts = this.state.posts.map((post, index) => {
                return (
                    <Link to={'/posts/' + post.id} key={post.id} >
                        <Post
                            title={post.title}
                            author={post.author}
                            // We can pass post ID as an argument to any method
                            clicked={() => this.postSelectedHandler(post.id)} />
                    </Link>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                {/* Id in this case is a flexibe, it will be replaced dynamically */}
                {/* <Route path="/:id" exact component={FullPost} /> */}
                <Route path={this.props.match.url  + '/:id' } exact component={FullPost} />
            </div>
        );

    }
}

export default Posts;