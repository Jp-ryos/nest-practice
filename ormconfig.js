module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true,
  entities: [
    'dist/user/entities/*.entity.js',
  ],
  migrations: [
    'dist/user/migrations/*.js',
  ],
  cli: {
    entitiesDir: 'src/user/entities',
    migrationsDir: 'src/user/migrations'
  }
};