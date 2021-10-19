import { Request, Response } from 'express'
import {
  getSymbolsFromData,
  getSymbol,
  createSymbol,
} from '../services/binance'

const getSymbolsPrices = async (req: Request, res: Response): Promise<any> => {
  const symbols = await getSymbolsFromData()
  if (symbols?.length === 0) {
    res.status(400).json({
      message: `Symbol's prices not found in data...`,
    })
    return null
  }

  const saveSymbolsPrices = symbols.map(async (symbol) => {
    const fetch = await getSymbol(symbol.symbol)
    await createSymbol({
      symbol: fetch.symbol,
      price: fetch.price,
    })
    return null
  })

  res.status(200).json({ message: 'Automated Process Success!' })
  return saveSymbolsPrices
}

export { getSymbolsPrices }
