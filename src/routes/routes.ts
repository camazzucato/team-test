import { Request, Response, Router } from 'express'
import uptime from '../resolvers/uptime'
import { savePairs, loadPairs } from '../resolvers/pairs'
import { getSymbolsPrices } from '../resolvers/automated'
import { average } from '../resolvers/average'

const router = Router()

router
  .get('/', (req: Request, res: Response) =>
    res.status(200).json({
      name: 'TEAM Test',
      developer: 'Carlos Massucato <c.a.massucato@gmail.com>',
    })
  )
  .get('/status', uptime)
  .post('/pairs', savePairs)
  .get('/pairs', loadPairs)
  .get('/automated', getSymbolsPrices)
  .post('/average', average)

export default router
