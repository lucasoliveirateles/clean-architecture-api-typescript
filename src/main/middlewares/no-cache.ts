// Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate
// Pragma: no-cache
// Expires: 0
// Surrogate-Control: no-store

import { Request, Response, NextFunction } from 'express'

export const noCache = (request: Request, response: Response, next: NextFunction): void => {
  response.set('cache-control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  response.set('pragma', 'no-cache')
  response.set('expires', '0')
  response.set('surrogate-control', 'no-store')

  next()
}
