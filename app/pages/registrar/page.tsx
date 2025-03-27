'use client';
import { useState } from 'react';
export default function Registrar() {
  const [nome, setNome] = useState('');

  const registrarPessoa = async (evento: any) => {
    evento.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: { 'Content-type': 'Aplication/json' },
        body: JSON.stringify(nome),
      });
      if (response.ok) {
        return <h1>Registrado com Sulcesso!</h1>;
      }
    } catch {}
  };
  return (
    <main>
      <form onSubmit={registrarPessoa}>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          placeholder="informe seu nome!"
          value={nome}
          type="text"
          onChange={(evento) => {
            setNome(evento.target.value);
          }}
        />
        <button>Salvar</button>
      </form>
    </main>
  );
}
