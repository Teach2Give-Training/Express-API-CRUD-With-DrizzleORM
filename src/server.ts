import express, { Application,Response } from 'express';
import dotenv from 'dotenv';
import { logger } from './middleware/logger';
import { userRouter } from './users/user.routes';
import { cityRouter } from './cities/city.routes';
import { stateRouter } from './state/state.routes';

dotenv.config();

const app: Application = express();

// Basic Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);



//default route
app.get('/', (req, res:Response) => {
  res.send("Welcome to Express API Backend WIth Drizzle ORM and PostgreSQL");
});

// Importing user routes
app.use('/api',userRouter)
app.use('/api',cityRouter)
app.use('/api',stateRouter)

const PORT = process.env.PORT || 5000;

//  then start the server

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
 });
  




