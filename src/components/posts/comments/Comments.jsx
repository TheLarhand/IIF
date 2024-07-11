import React from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'

const Comments = () => {
  const testComments = [
    {
      username: "Светлый Роман",
      comment: "крутой пост блин емае!",
      time: "11.07.24 в 12.29",
      likes: 123,
      anwsers: [
        {
          username: "Даниял Зуб",
          comment: "ЭТО ANGRY BIRDS",
          time: "11.07.24 в 17.32",
          likes: 0,
          anwsers: [
            {
              username: "Светлый Роман",
              comment: "Уйди из моего комментария пожалуйста...",
              time: "11.07.24 в 17.46",
              likes: 777,
              anwsers: []
            }
          ]
        }
      ]
    },
    {
      username: "Эвелина",
      comment: "пост супер!!!",
      time: "11.07.24 в 17.30",
      likes: 321,
      anwsers: []
    }
  ]
  return (
    <div>
      {testComments.map(comment => (
        <Comment 
          info = {comment}
          key={comment.id}
        />
      ))}
      <CommentForm/>
    </div>
  )
}

export default Comments
