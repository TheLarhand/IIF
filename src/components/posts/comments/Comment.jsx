import React from 'react'
import cl from './Comments.module.css'
import Button from '../../UI/Button'
import LikeBtn from '../../UI/LikeBtn'
import Heading from '../../UI/Heading'
import emptyAva from '../../../images/empty_ava.png'

const Comment = ({info}) => {
  return (
    <div>
      <div className={cl.commentWrapper}>
        <img className={cl.ava} src={info.ava === undefined ? emptyAva : info.ava} alt="ava" /> 
          <div className={cl.comment}>
            <Heading size={"16px"} color="rgb(130, 139, 255)">{info.username}</Heading>
            <p>{info.comment}</p>

            <div className={cl.commentBottom}>

              <div className={cl.commentBottomLeft}>
                <p>{info.time}</p>
              <Button type={2}>Ответить</Button>
              </div>

              <LikeBtn>{info.likes}</LikeBtn>
            </div>

          </div>
      </div>
      <div className={cl.anwsers}>
        {info.anwsers.map(anwser => (
              <Comment 
                info = {anwser}
                key={anwser.id}
              />
        ))}
      </div>
    </div>
  )
}

export default Comment