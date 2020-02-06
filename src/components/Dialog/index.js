import React from 'react'
import styles from './index.module.scss'

export default class Dialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasConfirm: !!this.props.onConfirm
        }
    }

    confirm = (data)=>{

    }

    render() {
        return (
            <div style={{display: this.props.visbility ? 'block': 'none'}} className={styles['dialog_wrap']}>
                {this.props.children}
                {this.state.hasConfirm ? <div onClick={()=>this.props.onConfirm(this.state.hasConfirm)}>hahah</div> : null}
            </div>
        )
    }
}