import React from 'react'
import styles from './index.module.scss'

function Button(props){
    if(!!props.text){
        return (
            <div>123</div>
        )
    }
    return (
    <div onClick={()=>props.onClick()} className={styles.button_wrap}>{props.children}</div>
    )
}

export default Button
