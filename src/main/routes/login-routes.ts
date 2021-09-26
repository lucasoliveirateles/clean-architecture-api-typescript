import { Router } from 'express'
import {
  makeSingUpController
} from '../factories/controllers/signup/signup-controller-factory'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import {
  makeLoginController
} from '../factories/controllers/login/login-controller-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSingUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
