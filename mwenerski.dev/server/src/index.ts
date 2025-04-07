import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import projectRoutes from './routes/projectRoutes';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio Backend is running ');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
