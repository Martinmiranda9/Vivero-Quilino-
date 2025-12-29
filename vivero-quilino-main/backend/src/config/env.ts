import 'dotenv/config';

const hasDatabaseUrl = !!process.env.DATABASE_URL;

const required = ['PORT'] as const;

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing env var: ${key}`);
  }
}

if (!hasDatabaseUrl) {
  const dbRequired = ['DB_HOST', 'DB_PORT', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'] as const;
  for (const key of dbRequired) {
    if (!process.env[key]) {
      throw new Error(`Missing env var: ${key}`);
    }
  }
}

export const env = {
  port: Number(process.env.PORT),

  db: {
    host: process.env.DB_HOST || '',
    port: Number(process.env.DB_PORT || 5432),
    name: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    ssl: process.env.DB_SSL === 'true',
  },

  whatsappNumber: process.env.WHATSAPP_NUMBER || '',
  jwtSecret: process.env.JWT_SECRET || 'default_secret_key',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '2h',
  admin_password: process.env.ADMIN_PASSWORD || '',
  admin_email: process.env.ADMIN_EMAIL || '',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:4200',

  smtpUser: process.env.SMTP_USER || '',
  smtpPass: process.env.SMTP_PASS || '',
  smtpHost: process.env.SMTP_HOST || '',
  smtpPort: Number(process.env.SMTP_PORT) || 0,
  smtpSecure: process.env.SMTP_SECURE === 'true',
};
