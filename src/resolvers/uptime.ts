import { Request, Response } from 'express'

const uptimeFormat = () => {
  const seconds = process.uptime()
  const pad = (s: number) => {
    return s.toString().padStart(2, '0')
  }
  const hours = pad(Math.floor(seconds / (60 * 60)))
  const minutes = pad(Math.floor((seconds % (60 * 60)) / 60))
  const _seconds = pad(Math.floor(seconds % 60))

  return `${hours}:${minutes}:${_seconds}`
}

const uptime = (_: Request, res: Response): void => {
  res.status(200).json({ uptime: uptimeFormat() })
}

export default uptime
