import express, { json } from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    preflightContinue: true,
  }),
);

app.post('/mock', (req, res) => {
  const { income } = req.body;

  let response;

  if (income <= 100){
    response = { status: 'DENIED' }
  }else{
    response = { status: 'APPROVED', "max_ammount": income*2}
  }

  res.set('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.json(response);
});

app.listen(port, () => {
  console.log(`Mock API na porta ${port}`);
});