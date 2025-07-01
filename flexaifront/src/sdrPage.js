import React, { useEffect, useState } from 'react';

function SdrPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/sdr/api/')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{data.titulo}</h1>
      <p>{data.mensagem}</p>
      <ul>
        {data.itens.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}

export default SdrPage;