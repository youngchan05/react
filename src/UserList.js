import React, { useState } from 'react';
function User({user , onRemove}){
    const {id , username , email} = user;
    return(
        <div>
            <b>{username} {email}</b>
            <button onClick = {() => onRemove(id)}>삭제</button>  
        </div>
    );
}
function UserList({users , onRemove}){
    return(
        <div>
        {
            users.map(
                user => (<User user={user} key={user.id} onRemove={onRemove}/>)
            )
        }
        </div>
    )
}
export default UserList;