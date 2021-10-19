import { Knex } from 'knex'
import { Symbols } from '../models/Symbols'

export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable(Symbols.tableName, (table: Knex.TableBuilder) => {
    table.increments()
    table.string('symbol')
    table.float('price')
    table.timestamps()
  })

export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable(Symbols.tableName)
