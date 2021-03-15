import React from 'react'
import style from './FormsControls.module.css'

export const FormControl = ({meta, input, child, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props: any) => {
    const {meta, input, child, ...restprops} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restprops} />
    </FormControl>
}

export const Input = (props: any) => {
    const {meta, input, child, ...restprops} = props;
    return <FormControl {...props}>
        <input {...input} {...restprops} />
    </FormControl>


}