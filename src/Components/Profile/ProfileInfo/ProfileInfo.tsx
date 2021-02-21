import React from "react";
import cl from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import { ProfileDataItemAPIType } from "../../../Redux/profile-reducer";

type ProfileInfoType = {
    profile: ProfileDataItemAPIType
}

function ProfileInfo(props: ProfileInfoType) {

    if(props.profile.profileDataIsLoaded){
       return <Preloader/>
    }

    return (
        <div>

            <div>
                <img className={cl.myMainBackground} src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
                     alt=""/>
            </div>

            <div>
                <img src={props.profile.photos.large}/>
                ava+descr
            </div>


        </div>
    )
}


export default ProfileInfo