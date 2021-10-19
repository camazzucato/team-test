import { Id } from 'objection'
import Base from './base'

export class Symbols extends Base {
  id!: Id
  symbol!: string
  price!: number

  static tableName = 'symbols'
}

export default Symbols
