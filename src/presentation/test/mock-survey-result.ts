import {
  SaveSurveyResult, SaveSurveyResultModelParams
} from '~/domain/usecases/survey-result/save-survey-result'
import { SurveyResultModel } from '~/domain/models/survey-result'
import { mockSurveyResultModel } from '~/domain/test'

export const mockSaveSurveyResult = (): SaveSurveyResult => {
  class SaveSurveyResultStub {
    async save (data: SaveSurveyResultModelParams): Promise<SurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }

  return new SaveSurveyResultStub()
}
