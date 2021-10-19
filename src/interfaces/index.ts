export interface Pairs {
  symbol: string
}

export interface PairsPrice {
  symbol: string
  price: number
}

export interface ResLectures {
  average: string
  numberOfLectures: number
}

export enum NodeEnv {
  TEST = 'test',
  DEV = 'development',
}

export interface Env {
  env: NodeEnv
  dbFilename: string
  dbTestFilename: string
  knexDebug: boolean
  port: number
  defaultPage: number
  defaultPageSize: number
}
