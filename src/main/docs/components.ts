import {
  badRequest,
  unauthorized,
  serverError,
  notFound,
  forbidden
} from './components/index'
import {
  apiKeyAuthSchema
} from './schemas/index'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorized,
  serverError,
  notFound,
  forbidden
}
