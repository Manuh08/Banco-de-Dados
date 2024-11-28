const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const app = express();
const port = 3000;


const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'Projeto',
  password: 'postgres',
  port: 5432
});


app.use(express.static(path.join(__dirname)));

app.get('/api/pessoa', async (req, res) => {
  try {
    const result = await pool.query(`select * from aluno`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar dados');
  }
});

app.get('/api/pessoa', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

