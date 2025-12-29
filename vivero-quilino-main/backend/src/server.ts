import { createApp } from './app';
import { AppDataSource } from './config/data-source';
import { env } from './config/env';
// Seeders should be executed manually using npm scripts or docker-compose.
// See package.json scripts: `npm run seed` and `npm run seed:build`.

(async () => {
  try {
    await AppDataSource.initialize();
    console.log('📦 DB connected');

    // if (process.env.RUN_SEEDERS === 'true') {
    //   console.log('🌱 Running seeders...');
    //   const { runSeeders } = await import('./app/seeders');
    //   await runSeeders();
    //   console.log('✅ Seeders completed');
    // }


    const app = createApp();

    app.listen(env.port, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${env.port}`);
    });
  } catch (err) {
    console.error('❌ Failed to start app:', err);
    process.exit(1);
  }
})();
