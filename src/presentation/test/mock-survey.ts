import { SurveyModel } from '~/domain/models/survey'
import {
  mockSurveyModel,
  mockSurveysModels
} from '~/domain/test'
import {
  AddSurvey,
  AddSurveyModelParams
} from '~/domain/usecases/survey/add-survey'
import { LoadSurveys } from '~/domain/usecases/survey/load-surveys'
import { LoadSurveyById } from '~/domain/usecases/survey/load-survey-by-id'

export const mockAddSurvey = (): AddSurvey => {
  class AddSurveyStub implements AddSurvey {
    async add (data: AddSurveyModelParams): Promise<void> {
      return await new Promise(resolve => resolve())
    }
  }

  return new AddSurveyStub()
}

export const mockLoadSurveys = (): LoadSurveys => {
  class LoadSurveyStub implements LoadSurveys {
    async load (): Promise<SurveyModel[]> {
      return await new Promise(resolve => resolve(mockSurveysModels()))
    }
  }

  return new LoadSurveyStub()
}

export const mockLoadSurveyById = (): LoadSurveyById => {
  class LoadSurveyByIdStub {
    async loadById (id: string): Promise<SurveyModel> {
      return await new Promise(resolve => resolve(mockSurveyModel()))
    }
  }

  return new LoadSurveyByIdStub()
}
