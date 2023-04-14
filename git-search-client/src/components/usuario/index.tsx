import React from 'react';
import { IUser } from '../../types/IUser';
import './Usuario.css';


interface UserInfoProps {
    user: IUser;
}

export default function Usuario({user}: UserInfoProps){
    return(
        <div className='user'>
            
            <img src={user.avatar_url} alt={user.name} className='avatar'/>
            
            <div className="nome">
                <h2 className='user_nome'>{user.name}</h2>
                <h3 className='user_login'>{user.login}</h3>
            </div>

            <div className="follow">
                <label>{user.followers} Followers</label>
                <label>{user.following} Following</label>
            </div>

            <div className='qtd_repos'>
                <label>{user.public_repos} Public Repositories</label>
            </div>

            <div className="bio">
                <p>{user.bio}</p>
            </div>

            <div className="infos">
                <label>{user.location}</label>
                <label>{user.email}</label>
                <label>{user.blog}</label>
                <label>{user.twitter_username}</label>
            </div>

        </div>
    );
}