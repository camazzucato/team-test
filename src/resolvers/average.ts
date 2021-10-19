import { Request, Response } from 'express'
import { listAverage } from '../services/binance'
import { ResLectures } from '../interfaces'

const average = async (req: Request, res: Response): Promise<ResLectures> => {
  const { symbol, lectures } = req.query

  if (!symbol) {
    res.status(400).json({
      message: 'SYMBOL not provided',
    })
    return null
  }

  if (!lectures) {
    res.status(400).json({
      message: `SYMBOL's lecture not provided`,
    })
    return null
  }

  const listSymbolLecture = await listAverage(symbol, lectures)
  res.status(200).json(listSymbolLecture)
  return listSymbolLecture
}

export { average }
