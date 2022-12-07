import React from 'react'

const Comment = ({ comments }) => {
    return (
        <>
            {comments?.map((comment) => {
                return (
                    <div key={comment.id} className='comment_container'>
                        <p>
                            {comment.additional_comment}
                        </p>
                    </div>
                )
            })}
        </>
    )
}

export default Comment