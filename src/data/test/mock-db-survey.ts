import {
  AddSurveyRepository
} from '~/data/protocols/db/survey/add-survey-repository'
import {
  AddSurveyModelParams
} from '~/data/usecases/survey/add-survey/add-survey-protocols'
import {
  LoadSurveyByIdRepository
} from '~/data/protocols/db/survey/load-survey-by-id-repository'
import {
  LoadSurveyRepository
} from '~/data/protocols/db/survey/load-surveys-repository'
import { SurveyModel } from '~/domain/models/survey'
import { mockSurveyModel, mockSurveysModels } from '~/domain/test'

export const mockAddSurveyRepository = (): AddSurveyRepository => {
  class AddSurveyRepositoryStub implements AddSurveyRepository {
    async add (surveyData: AddSurveyModelParams): Promise<void> {
      return await Promise.resolve()
    }
  }

  return new AddSurveyRepositoryStub()
}

export const mockLoadSurveyByIdRepository = (): LoadSurveyByIdRepository => {
  class LoadSurveyByIdRepositoryStub implements LoadSurveyByIdRepository {
    async loadById (id: string): Promise<SurveyModel> {
      return await Promise.resolve(mockSurveyModel())
    }
  }

  return new LoadSurveyByIdRepositoryStub()
}

export const mockLoadSurveysIdRepository = (): LoadSurveyRepository => {
  class LoadSurveysRepositoryStub implements LoadSurveyRepository {
    async loadAll (): Promise<SurveyModel[]> {
      return await Promise.resolve(mockSurveysModels())
    }
  }

  return new LoadSurveysRepositoryStub()
}
