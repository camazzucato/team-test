import * as dotenv from 'dotenv'
import { NodeEnv, Env } from '../../../interfaces'

dotenv.config()

const { PORT, DB_FILENAME, DB_TEST_FILENAME, KNEX_DEBUG } = process.env

export const config: Env = {
  env: (process.env.NODE_ENV as NodeEnv) || NodeEnv.DEV,
  dbFilename: DB_FILENAME || 'defaultdb.sqlite3',
  dbTestFilename: DB_TEST_FILENAME || 'defaultdb-test.sqlite3',
  knexDebug: KNEX_DEBUG === 'true',
  port: PORT ? parseInt(PORT, 10) : 3000,
  defaultPage: 0,
  defaultPageSize: 10,
}
