import React from 'react';
import { IRepo } from '../../types/IRepo';
import './Repositorio.css'

interface repoInfo{
    repo: IRepo
}

export default function Repositorio({repo}: repoInfo){

    
    return(
        <div className='repositorio'>
            <label>{repo.name}</label>
            <label>{repo.description}</label>

            <div className='infos_repo'>
                <label>{repo.stargazers_count}</label>
                <label>{repo.forks_count}</label>
                <label>{repo.open_issues_count}</label>
                <label>{repo.watchers_count}</label>
            </div>
        </div>
    )
}