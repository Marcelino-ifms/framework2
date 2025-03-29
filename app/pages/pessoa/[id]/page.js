'use client'
import { useEffect, useState } from "react";
import { use } from "react";
export default function PagePessoa({ params }) {

    const { id } = use(params);
    const [pessoa, setPessoa] = useState({});
    useEffect(() => {
        const buscarPessoa = async () => {
            try {
                const resposta = await fetch('http://localhost:3000/api/');
                let pessoas = await resposta.json();
                pessoas = pessoas.filter((pessoa, index) => index == id);
                setPessoa(pessoas[0]);
            } catch (erro) {
                alert('Erro ao buscar pessoa!');
            }
        }
        buscarPessoa();
    }
        , []);

    const enviarFormulario = async (evento) => {
        evento.preventDefault();

        const novaPessoa = { id: id, ...pessoa };
        setPessoa(novaPessoa);

        try {
            const resposta = await fetch('http://localhost:3000/api', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pessoa)
            });
            if (resposta.ok) {
                alert('Dados alterados com sucesso!');
            }
        } catch (erro) {
            alert('Erro ao alterar os dados!');
        }
    }

    return (
        <form onSubmit={enviarFormulario}>
            <label htmlFor="nome">Nome:</label>

            <input type="text" id="nome" value={pessoa.nome || ''}
                onChange={(e) => setPessoa({ ...pessoa, nome: e.target.value })} />


            <button>Enviar</button>
        </form>
    )

}
