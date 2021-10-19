import { Request, Response } from 'express'
import { getSymbol, listSymbols, createSymbol } from '../services/binance'
import { PairsPrice } from '../interfaces'

const savePairs = async (req: Request, res: Response): Promise<PairsPrice> => {
  const { symbol } = req.body
  if (!symbol) {
    res.status(400).json({
      message: 'SYMBOL not provided',
    })
  }

  const pairBinance = await getSymbol(symbol)
  if (pairBinance?.response?.status === 400) {
    res.status(400).json({
      message: `Symbol ${symbol} not found!`,
    })
    return null
  }

  const addPairs = await createSymbol(pairBinance)
  if (!addPairs) {
    res.status(400).json({
      message: `Error creating Symbol ${symbol}...`,
    })
    return null
  }

  res.status(200).json(pairBinance)
  return pairBinance
}

const loadPairs = async (req: Request, res: Response): Promise<any> => {
  const listPairs = await listSymbols()
  res.status(200).json(listPairs)
  return listPairs
}

export { savePairs, loadPairs }
