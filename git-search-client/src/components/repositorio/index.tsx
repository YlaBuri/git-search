import React from 'react';
import { IRepo } from '../../types/IRepo';
import { AiOutlineEye, AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import {VscIssues} from  "react-icons/vsc";
import './Repositorio.css'

interface repoInfo{
    repo: IRepo
}

export default function Repositorio({repo}: repoInfo){

    
    return(
        <div className='repositorio'>
            <label className='repo_name'>{repo.name}</label>
            <label className='repo_descr'>{repo.description}</label>

            <div className='infos_repo'>
                <label>
                <span className='icon'><AiOutlineStar /></span>
                    {repo.stargazers_count}
                </label>

                <label>
                    <span className='icon'><AiOutlineFork /></span>
                    {repo.forks_count}
                </label>

                <label>
                    <span className='icon'><VscIssues /></span> 
                    {repo.open_issues_count}
                </label>

                <label>
                    <span className='icon'><AiOutlineEye /></span> 
                    {repo.watchers_count}
                </label>
            </div>
        </div>
    )
}