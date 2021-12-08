import {
  SaveSurveyResult, SaveSurveyResultParams
} from '~/domain/usecases/survey-result/save-survey-result'
import { SurveyResultModel } from '~/domain/models/survey-result'
import {
  LoadSurveyResult
} from '~/domain/usecases/survey-result/load-survey-result'
import { mockSurveyResultModel } from '~/domain/test'

export const mockSaveSurveyResult = (): SaveSurveyResult => {
  class SaveSurveyResultStub {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }

  return new SaveSurveyResultStub()
}

export const mockLoadSurveyResult = (): LoadSurveyResult => {
  class LoadSurveyResultStub {
    async load (surveyId: string): Promise<SurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }

  return new LoadSurveyResultStub()
}
