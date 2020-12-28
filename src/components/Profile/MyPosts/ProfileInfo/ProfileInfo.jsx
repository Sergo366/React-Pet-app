import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import userPhoto from '../../../../assets/image/I.jpg'


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) =>{
       if (e.target.files.length){
           savePhoto(e.target.files[0])
       }
    }

    return (
            <div>
                <div >
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                    <div>{profile.fullName}</div>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
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