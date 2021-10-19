import request from 'supertest'
import app from '../src'

describe('API, it should...', () => {
  it('shows infos on GET /', async () => {
    await request(app).get('/').expect(200)
  })

  it('shows uptime on GET /status', async () => {
    await request(app).get('/status').expect(200)
  })

  it('shows symbols on GET /pairs', async () => {
    await request(app).get('/pairs').expect(200)
  })

  it('status 400 (no symbols for automated service) on GET /automated', async () => {
    await request(app).get('/automated').expect(400)
  })

  it('create symbol on POST /pairs', async () => {
    const symbol = {
      symbol: 'DOTUSDT',
    }
    await request(app).post('/pairs').send(symbol).expect(200)
  })

  it('status 400 (not exists in BINANCE) on POST /pairs', async () => {
    const symbol = {
      symbol: 'BRLCRIPTFAKE',
    }
    await request(app).post('/pairs').send(symbol).expect(400)
  })

  it('run automated service on GET /automated', async () => {
    await request(app).get('/automated').expect(200)
  })

  it('status 400 (no symbols params) on POST /average', async () => {
    const symbol = {
      symbol: 'BRLCRIPTFAKE',
    }
    await request(app).post('/average').expect(400)
  })

  it('show average info for symbol on POST /average', async () => {
    const params = {
      symbol: 'BRLCRIPTFAKE',
      lectures: 5,
    }
    await request(app).post('/average').query(params).expect(200)
  })
})
