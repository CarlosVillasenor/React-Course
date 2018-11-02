import React, { Component } from 'react';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header  >
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> */}
                            {/* Remember that we have access to this.props.match, The match object has the
                             URL object which is the currently loaded path in the end. */}
                            {/* activeClassName="my-active" */}
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: 'red',
                                    textDecoration: 'underline'
                                }} >Post
                            </NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*
                We use the path here to tell react router does my path start with this? Except for
                the case that you define exact, then the question would be is my complete path like
                this?
                And then here render determines what the react router should render to the screen in
                this component's place here, so route simply replaces itself you could say with the 
                content you define here and you can of course use multiple routes, even for the same
                path.
                */}
                {/* Switch tells the react router, hey please only load one of the routes. The first one
                 actually you find that matches from a given set of routes. */}
                <Switch>
                    { this.state.auth ? <Route path="/new-post" exact component={NewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Route render={ () => <h1>Route not found </h1> } />
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>

            </div>
        );
    }
}

export default Blog;