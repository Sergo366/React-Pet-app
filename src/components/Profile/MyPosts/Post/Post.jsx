import React from 'react';
import s from './Post.module.css';
import circlePhoto from '../../../../assets/skypePhoto.jpg'
import like from '../../../../assets/like.png'

const Post = ({likesCount, message}) => {

    return (
        <div className={s.item}>
            <div className={s.flex}>
                <div className={s.photo}>
                    <img src={circlePhoto}/>
                </div>

                <div className={s.postText}>
                    {message}
                </div>
            </div>
            <div className={s.like}>
                <img src={like} alt=""/>
                <span>like</span> {likesCount}
            </div>
        </div>
    )
}

export default Post;