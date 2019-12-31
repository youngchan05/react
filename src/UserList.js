import React, { useState } from 'react';
function User({user}){
    const {id , userNmae , email} = user;
    return(
        <div>
            <b>{userNmae} {email}</b>
        </div>
    );
}
function UserList({users}){
    return(
        <div>
        {
            users.map(
                user => (<User user={user} key={user.id}/>)
            )
        }
        </div>
    )
}
export default UserList;