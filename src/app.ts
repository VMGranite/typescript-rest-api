import { getCustomerById } from './database';
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { Pool } from "pg";

export class App {
  private app = express();
  static pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432")
  });

  constructor() {
    dotenv.config();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.connectToDB();
    
    this.app.get('/customer/:id', this.customerById);

    this.app.listen(process.env.PORT, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  }

  private async connectToDB() {
    try {
      await App.pool.connect();
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  }

  private async customerById(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
      const customer = await getCustomerById(id);

      if (customer) {
        res.json(customer);
      } else {
        res.status(404).json({ message: 'Customer not found' });
      }

    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
}
