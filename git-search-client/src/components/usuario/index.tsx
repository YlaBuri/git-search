import React from 'react';
import { IUser } from '../../types/IUser';



interface UserInfoProps {
    user: IUser;
}

export default function Usuario({user}: UserInfoProps){
    return(
        <div>
            <h2>{user.name}</h2>
            <img src={user.avatar_url} alt={user.name} />
            <p>{user.bio}</p>

        </div>
    );
}