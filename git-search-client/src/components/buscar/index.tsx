import React, { useState } from 'react';

export default function Buscar(props: any){

    const [valorUserInput, setInputValor] = useState('');

    const pesquisar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        props.onSubmit(valorUserInput);
    }

    return(
        <form onSubmit={pesquisar}>
            <label>
                
                <input type="text" id="pesquisar" onChange={evento => setInputValor(evento.target.value)}></input>
            </label>
            <button type="submit">Pesquisar</button>
        </form>
    )
}