import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './app';
import PostsIndex from './components/PostsIndex'
import PostsShow from './components/PostsShow'
import NewPost from './components/NewPost'


export default (
    <Route path='/' component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route component={NewPost} path='new/post'/>
        <Route component={PostsShow} path='post/:id'/>
    </Route>
)
