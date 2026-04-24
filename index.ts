import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Atlas TS from Docker 🚀");
});

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, "0.0.0.0",() => {
  console.log(`App running on port ${PORT}`);
});