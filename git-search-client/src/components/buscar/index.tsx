import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import "./Buscar.css"

export default function Buscar(props: any){

    const [valorUserInput, setInputValor] = useState('');

    const pesquisar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        props.onSubmit(valorUserInput);
    }

    return(
        <form onSubmit={pesquisar}>
            <div  className="search">
                
                <input type="text" id="pesquisar" onChange={evento => setInputValor(evento.target.value)}></input>
                <button  type="submit" className='btn_pesquisar'>
                <span className='icon'><AiOutlineSearch /></span> 
                </button>
            </div>
        </form>
    )
}