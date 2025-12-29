import 'reflect-metadata';                 // SIEMPRE primero
import express from 'express';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import healthRoutes from './infrastructure/routes/health.routes';
import routes from './infrastructure/routes/index';
import { errorHandler } from './middlewares/errorHandler';
import { env } from './config/env';


const allowOrigins = [
  "http://localhost:4200",
  env.frontendUrl
].filter(Boolean).map(o => o.replace(/\/$/, ""));

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      // Postman, curl, health checks
      return callback(null, true);
    }

    if (allowOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.error("CORS bloqueado:", origin);
    callback(new Error("Origen no permitido por CORS"));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

export const createApp = () => {
  const app = express();

  if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
  }

  app.use(cors(corsOptions));
  app.use(cookieParser());
  app.use(express.json());

  app.use('/api', healthRoutes);
  app.use('/api', routes);


  // Manejo centralizado de errores
  app.use(errorHandler);

  return app;
};
