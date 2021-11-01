import {
  AccountModel
} from '~/presentation/middlewares/auth-middleware-protocols'
import {
  AddAccountModelParams
} from '~/data/usecases/account/add-account/db-add-account-protocols'
import { AuthenticationModelParams } from '~/domain/usecases/account/authentication'

export const mockAccountModel = (): AccountModel => ({
  id: 'any_id',
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'hashed_password'
})

export const mockAddAccountParams = (): AddAccountModelParams => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockFakeAuthentication = (): AuthenticationModelParams => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})
