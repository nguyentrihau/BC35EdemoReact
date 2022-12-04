import React,{memo} from 'react'
const Comment = (props)=>{
    console.log('comment');

  return (
    <div>
        <p>{props.renderLike()}</p>
        ban da tha {props.like} <i class="fa fa-heart" aria-hidden="true"></i>
        <textarea></textarea> <br />
        <button>Gui</button>
    </div>
  )
}

export default Comment