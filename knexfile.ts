import { config } from './src/db/knex/config/db'
import * as path from 'path'
import objection from 'objection'

const defaultKnexConfig = {
  client: 'sqlite3',
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve('src/db/knex/migrations'),
  },
  seeds: {
    directory: path.resolve('src/db/knex/seeds'),
  },
  ...objection.knexSnakeCaseMappers(),
  useNullAsDefault: true,
}

export default {
  development: {
    ...defaultKnexConfig,
    connection: { filename: config.dbFilename },
  },
  test: {
    ...defaultKnexConfig,
    connection: { filename: config.dbTestFilename },
  },
}
