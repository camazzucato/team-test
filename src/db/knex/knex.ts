import Knex from 'knex'
import knexConfig from '../../../knexfile'
import { config } from './config/db'

export default Knex(knexConfig[config.env])
