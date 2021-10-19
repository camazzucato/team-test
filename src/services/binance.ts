import axios from 'axios'
import { Symbols } from '../db/knex/models'
import { Pairs, PairsPrice } from '../interfaces'

const { BINANCE_API_URL, BINANCE_API_PRICE } = process.env

export const getSymbol = async (symbol: Pairs): Promise<any> => {
  try {
    const symbolBinance = await axios({
      method: 'get',
      baseURL: `${BINANCE_API_URL}/${BINANCE_API_PRICE}`,
      params: {
        symbol: symbol,
      },
    })

    return symbolBinance.data
  } catch (error) {
    return error
  }
}

export const createSymbol = async (payload: PairsPrice): Promise<any> => {
  const { symbol, price } = payload
  const now = new Date()
  const insert = {
    symbol: symbol,
    price: price,
    createdAt: now,
    updatedAt: now,
  }

  try {
    const created = await Symbols.query().insert(insert)
    return created
  } catch {
    return null
  }
}

export const listSymbols = async (): Promise<any> => {
  const symbols = await Symbols.query()
  return symbols
}

export const getSymbolsFromData = async (): Promise<any> => {
  const symbolsFromData = await Symbols.query().distinct('symbol')
  return symbolsFromData
}

export const listAverage = async (symbol, lectures): Promise<any> => {
  const subcolumn = Symbols.query()
    .avg('price')
    .from('symbols')
    .whereRaw(`symbol = '${symbol}'`)
    .as('average')

  const symbolsLectures = await Symbols.query()
    .select(subcolumn)
    .select(Symbols.raw(`${lectures} as "numberOfLectures"`))
    .from('symbols AS s')
    .whereRaw(`symbol = s.symbol AND symbol = '${symbol}'`)
    .groupBy('symbol')
    .limit(lectures)
    .orderBy('id', 'DESC')
    .first()

  return symbolsLectures
}
