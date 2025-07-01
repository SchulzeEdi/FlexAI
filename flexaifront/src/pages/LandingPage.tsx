import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

// Paleta: Azul principal (#2563EB), Roxo secundário (#7C3AED), Branco (#fff)

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box minHeight="100vh" bgcolor="#f5f6fa">
      <AppBar position="static" sx={{ bgcolor: '#2563EB', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>
            FlexAI
          </Typography>
          <Button
            sx={{ color: '#fff', borderColor: '#fff', fontWeight: 600 }}
            variant="outlined"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #2563EB 0%, #7C3AED 100%)',
          color: '#fff',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h2" fontWeight={900} mb={2} letterSpacing={2}>
          FlexAI
        </Typography>
        <Typography variant="h4" fontWeight={400} mb={4}>
          IA para Seleção e Vendas
        </Typography>
        <Typography variant="h6" maxWidth={700} mb={5} sx={{ opacity: 0.95 }}>
          Automatize entrevistas, otimize SDRs e potencialize resultados com tecnologia de ponta. Plataforma completa para recrutamento, análise de candidatos e gestão de vendas.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            fontSize: 20,
            px: 6,
            py: 2,
            borderRadius: 8,
            boxShadow: 3,
            bgcolor: '#fff',
            color: '#2563EB',
            fontWeight: 700,
            '&:hover': { bgcolor: '#e0e7ff', color: '#7C3AED' },
          }}
          onClick={() => navigate('/login')}
        >
          Experimente Agora
        </Button>
      </Box>

      <Box
        sx={{
          minHeight: '40vh',
          bgcolor: '#fff',
          py: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" sx={{ color: '#2563EB', fontWeight: 800, mb: 4 }}>
          Por que escolher o FlexAI?
        </Typography>
        <Container maxWidth="lg">
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={6}>
            <Box maxWidth={320} textAlign="center" p={3} borderRadius={4} boxShadow={2} sx={{ bgcolor: '#e0e7ff' }}>
              <Typography variant="h5" fontWeight={700} color="#2563EB" mb={1}>
                Entrevistas Automatizadas
              </Typography>
              <Typography variant="body1" color="#444">
                Reduza o tempo de triagem com entrevistas por IA, análise de respostas e ranking automático de candidatos.
              </Typography>
            </Box>
            <Box maxWidth={320} textAlign="center" p={3} borderRadius={4} boxShadow={2} sx={{ bgcolor: '#ede9fe' }}>
              <Typography variant="h5" fontWeight={700} color="#7C3AED" mb={1}>
                Gestão de SDRs
              </Typography>
              <Typography variant="body1" color="#444">
                Organize, acompanhe e potencialize sua equipe de vendas com dashboards inteligentes e insights em tempo real.
              </Typography>
            </Box>
            <Box maxWidth={320} textAlign="center" p={3} borderRadius={4} boxShadow={2} sx={{ bgcolor: '#fff' }}>
              <Typography variant="h5" fontWeight={700} color="#2563EB" mb={1}>
                Resultados Mensuráveis
              </Typography>
              <Typography variant="body1" color="#444">
                Acompanhe métricas, relatórios e evolua seu processo seletivo e comercial com dados concretos.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          minHeight: '20vh',
          background: 'linear-gradient(180deg, #2563EB 0%, #7C3AED 100%)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
        }}
      >
        <Typography variant="h4" fontWeight={800} mb={2}>
          Pronto para transformar seu processo?
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            fontSize: 18,
            px: 5,
            py: 1.5,
            borderRadius: 6,
            boxShadow: 2,
            bgcolor: '#fff',
            color: '#2563EB',
            fontWeight: 700,
            '&:hover': { bgcolor: '#e0e7ff', color: '#7C3AED' },
          }}
          onClick={() => navigate('/login')}
        >
          Comece Agora
        </Button>
      </Box>
    </Box>
  );
}
