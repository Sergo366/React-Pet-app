import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>*/}
            {/*</div>*/}
            <div>
                <div>
                    <img src={props.profile.photos.large}/>
                    <div>{props.profile.fullName}</div>
                </div>
                <div className={s.textBlock}>
                    <div>{props.profile.lookingForAJob? "Ищу работу":"Уже работаю"}</div>
                    <div>{props.profile.lookingForAJobDescription}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;