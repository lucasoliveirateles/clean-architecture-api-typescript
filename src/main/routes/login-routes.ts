import { Router } from 'express'
import {
  makeSingUpController
} from '../factories/controllers/login/signup/signup-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'
import {
  makeLoginController
} from '../factories/controllers/login/login/login-controller-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSingUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
