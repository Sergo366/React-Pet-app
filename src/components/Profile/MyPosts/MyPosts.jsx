import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    

    const onAddPosts = (values) =>{
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
                <AddNewPostRedux onSubmit={onAddPosts}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component="textarea" name="newPostText"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostRedux = reduxForm({form:"addNewPostForm"})(AddNewPostForm)

export default MyPosts;