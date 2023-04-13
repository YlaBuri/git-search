import React from 'react';
import { IRepo } from '../../types/IRepo';


interface repoInfo{
    repo: IRepo
}

export default function Repositorio({repo}: repoInfo){

    
    return(
        <div>
            <label>{repo.name}</label>
        </div>
    )
}