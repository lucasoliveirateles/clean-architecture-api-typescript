import { Router } from 'express'
import {
  makeSingUpController
} from '~/main/factories/controllers/login/signup/signup-controller-factory'
import { adaptRoute } from '~/main/adapters/express-route-adapter'
import {
  makeLoginController
} from '~/main/factories/controllers/login/login/login-controller-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSingUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
