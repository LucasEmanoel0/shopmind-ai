
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL não definida');
}

export default defineConfig({
  out: './drizzle',
  schema: './src/db/*.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: databaseUrl,
  },
});
