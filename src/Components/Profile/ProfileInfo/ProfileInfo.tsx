import React from "react";
import cl from './ProfileInfo.module.css';


function ProfileInfo() {
    return (
        <div>

            <div>
                <img className={cl.myMainBackground} src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
                     alt=""/>
            </div>

            <div>
                ava+descr
            </div>


        </div>
    )
}


export default ProfileInfo