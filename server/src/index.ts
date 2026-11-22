import "dotenv/config";
import {connectDB} from './config/db';
import express, {type Express, type Request, type Response} from 'express';

const app: Express = express();
const port = process.env.PORT; 

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
}); 

// https://www.mongodb.com/resources/products/compatibilities/using-typescript-with-mongodb-tutorial
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit(1);
  });
