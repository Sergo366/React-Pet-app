import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
            <div>
                <div>
                    <img src={profile.photos.large}/>
                    <div>{profile.fullName}</div>
                </div>
                <div className={s.textBlock}>
                    <div>{profile.lookingForAJob? "Ищу работу":"Уже работаю"}</div>
                    <div>{profile.lookingForAJobDescription}</div>
                    <div>{profile.contacts.twitter}</div>
                    <div>{profile.contacts.facebook}</div>
                    <div>{profile.contacts.instagram}</div>
                    <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                </div>
            </div>
    )
}

export default ProfileInfo;