import React from 'react'
import cl from "./Comments.module.css"
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import clip from '../../../images/clip.svg'
import send from '../../../images/send.svg'

const CommentForm = () => {
  return (
    <div className={cl.form}>
        <Input width={"87%"}/>
        <Button><img width={"20px"} src={clip}/></Button>
        <Button><img width={"20px"} src={send}/></Button>
    </div>
  )
}

export default CommentForm