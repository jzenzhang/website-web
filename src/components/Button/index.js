import React from 'react'
import cs from 'classnames'
import styles from './index.module.scss'

function Button(props) {
    if (!!props.text) {
        return (
            <div>123</div>
        )
    }
    return (
        <div style={props.style || null} onClick={props.onClick ? () => props.onClick() : null} className={cs(styles.button_wrap, props.className || null)}>{props.children}</div>
    )
}

export default Button
