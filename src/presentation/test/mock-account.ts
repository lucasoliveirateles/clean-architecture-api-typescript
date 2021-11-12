import {
  AddAccount,
  AddAccountModelParams
} from '~/domain/usecases/account/add-account'
import { AccountModel } from '~/domain/models/account'
import { mockAccountModel } from '~/domain/test'
import {
  Authentication,
  AuthenticationModelParams
} from '~/domain/usecases/account/authentication'
import {
  LoadAccountByToken
} from '~/domain/usecases/account/load-account-by-token'

export const mockAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add (account: AddAccountModelParams): Promise<AccountModel> {
      const fakeAccount = mockAccountModel()

      return await new Promise(resolve => resolve(fakeAccount))
    }
  }

  return new AddAccountStub()
}

export const mockAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    async auth (authentication: AuthenticationModelParams): Promise<string> {
      return await new Promise(resolve => resolve('any_token'))
    }
  }

  return new AuthenticationStub()
}

export const mockLoadAccountByToken = (): LoadAccountByToken => {
  class LoadAccountByTokenStub implements LoadAccountByToken {
    async load (accessToken: string, role?: string): Promise<AccountModel> {
      return await new Promise(resolve => resolve(mockAccountModel()))
    }
  }

  return new LoadAccountByTokenStub()
}
