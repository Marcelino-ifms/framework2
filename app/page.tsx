export default async function Home() {
  let data;
  try {
    const response = await fetch('http://localhost:3000/api');
    data = await response.json();
  } catch (err) {
    return <h1>Sem comunicação com o banco!</h1>;
  }
  return (
    <main>
      <h1> Lista de Pessoas</h1>
      {data.map((pessoa, index) => (
        <ul key={index}>
          <li>{pessoa.nome}</li>
        </ul>
      ))}
    </main>
  );
}
