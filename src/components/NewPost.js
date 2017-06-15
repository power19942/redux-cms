import React,{PropTypes,Component} from 'react';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {createPost} from './../actions'
class NewPost extends Component {
    static contextTypes = {
        router:PropTypes.object
    };
    // props args is passed to the function from form using handleSubmit
    onSubmit(props){
        // this action return promise
        this.props.createPost(props).then(()=>{
            // blog post created
            alert('don');
            this.context.router.push('/');
        });

    }
    render(){
        const {fields:{title,categories,content},handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="err">{title.touched ? title.error : ''}</div>
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="err">{categories.touched ? categories.error : ''}</div>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea  className="form-control" {...content}></textarea>
                    <div className="err">{content.touched ? content.error : ''}</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/' className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}
function validate(values){
  const errors = {} ;
  if(!values.title)
      errors.title='Enter Title Name';
  if(!values.categories)
        errors.categories='Enter Category';
  if(!values.content)
        errors.content='Add Some Content';
  return errors;
};
//arg 1 : form config
//arg 2 : map state to props
//arg 3 : map dispatch to props
export default reduxForm({
    form:'PostNew',/*form name*/
    fields:['title','categories','content'],/*form fields*/
    validate/*validate function*/
},null /*mapStateToProps*/,{createPost})(NewPost);
