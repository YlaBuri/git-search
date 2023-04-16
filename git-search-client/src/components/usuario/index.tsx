import React from 'react';
import { IUser } from '../../types/IUser';
import './Usuario.css';
import { AiOutlineLink, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
interface UserInfoProps {
    user: IUser;
}

export default function Usuario({user}: UserInfoProps){
    return(
        <div className='user_content'>
            
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

                {user.location &&
                <label>
                    <span className='icon'><BiCurrentLocation /></span>
                    {user.location}
                </label>}
                
                {user.email && <label>
                    <span className='icon'><AiOutlineMail /></span> 
                    {user.email}
                </label>
                }
                
                {user.blog &&
                <label>
                    <span className='icon'><AiOutlineLink /></span>
                    {user.blog}
                </label>}
                
                {user.twitter_username &&
                <label>
                    <span className='icon'><AiOutlineTwitter /></span>
                    {user.twitter_username}
                </label>}
            </div>

        </div>
    );
}