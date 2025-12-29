import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { env } from './env';
import { Categoria } from '../domain/entities/Categoria';
import { CategoriaServicio } from '../domain/entities/CategoriaServicio';
import { Contacto } from '../domain/entities/Contacto';
import { Encargado } from '../domain/entities/Encargado';
import { ImagenProducto } from '../domain/entities/ImagenProducto';
import { ImagenServicio } from '../domain/entities/ImagenServicio';
import { Producto } from '../domain/entities/Producto';
import { RefreshToken } from '../domain/entities/RefreshToken';
import { Servicio } from '../domain/entities/Servicio';
import { SobreNosotros } from '../domain/entities/SobreNosotros';
import { Temporada } from '../domain/entities/Temporada';
import { Admin } from '../domain/entities/Admin';
import { PasswordResetToken } from '../domain/entities/PasswordResetToken';

const isProduction = process.env.NODE_ENV === 'production';

const databaseUrl = process.env.DATABASE_URL;

export const AppDataSource = new DataSource({
  type: 'postgres',

  ...(databaseUrl
    ? {
      url: databaseUrl,
      ssl: { rejectUnauthorized: false }, // Render
    }
    : {
      host: env.db.host,
      port: env.db.port,
      username: env.db.user,
      password: env.db.password,
      database: env.db.name,
      ssl: env.db.ssl ? { rejectUnauthorized: false } : false,
    }),

  entities: [
    Producto, Categoria, Temporada,
    Servicio, CategoriaServicio, ImagenProducto,
    ImagenServicio, Admin, RefreshToken,
    SobreNosotros, Contacto, Encargado,
    PasswordResetToken,
  ],

  migrations: isProduction
    ? ['dist/migrations/*.js']
    : ['src/migrations/*.ts'],
  synchronize: !isProduction,
  logging: false,
  ssl: env.db.ssl
    ? { rejectUnauthorized: false }
    : false,
});
