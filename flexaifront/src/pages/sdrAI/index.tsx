import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

export default function SdrModule() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8000/sdr/api/')
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar dados da API');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Box p={2}><CircularProgress /></Box>;
  if (error) return <Box p={2}><Typography color="error">{error}</Typography></Box>;

  return (
    <Box p={2}>
      <Typography variant="h5">{data?.titulo || 'SDR AI'}</Typography>
      <Typography>{data?.mensagem || 'Conteúdo do módulo SDR aqui.'}</Typography>
      {data?.itens && (
        <ul>
          {data.itens.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </Box>
  );
}
