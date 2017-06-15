import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './../actions';
import {Link} from 'react-router';
class PostsIndex extends React.Component {
    componentWillMount(){
        this.props.fetchPosts();
    }
    renderPosts(){
     return this.props.posts.map(post=>{
            return (
                <li key={post.id} className="list-group-item">
                    <Link to={"post/"+post.id} >
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            )
        })
    }
    render(){
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/new/post"  className="btn btn-primary">
                        Add Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        posts:state.posts.all
    }
};
export default connect(mapStateToProps,{fetchPosts})(PostsIndex)
