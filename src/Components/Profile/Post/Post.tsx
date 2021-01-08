import React from "react";
import cl from './Post.module.css'


type PostType = {
    message: string
    likesCount: number
}


function Post(props: PostType) {
    return (

        <div>
            <div>
                <img className={cl.avatar}
                    src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
                    alt=""/>
                {props.message}
            </div>
            <div>
                <span>
                    {props.likesCount}
                </span>
            </div>
        </div>

    )
}


export default Post