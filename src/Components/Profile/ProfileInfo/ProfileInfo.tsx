import React from "react";
import cl from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import { ProfileDataItemAPIType } from "../../../Redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileDataItemAPIType
    status: string
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoType) {

    if(props.profile.profileDataIsLoaded){
       return <Preloader/>
    }

    return (
        <div>

            {/*<div>
                <img className={cl.myMainBackground} src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
                     alt=""/>
            </div>*/}

            <div>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}
                               getStatus={props.getStatus}/>
            </div>


        </div>
    )
}


export default ProfileInfo