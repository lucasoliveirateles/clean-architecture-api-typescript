import {
  SaveSurveyResultRepository
} from '~/data/protocols/db/survey-result/save-survey-result-repository'
import {
  SaveSurveyResultModelParams
} from '~/domain/usecases/survey-result/save-survey-result'
import { SurveyResultModel } from '~/domain/models/survey-result'
import { mockSurveyResultModel } from '~/domain/test'

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultModelParams): Promise<SurveyResultModel> {
      return await new Promise(resolve => resolve(mockSurveyResultModel()))
    }
  }

  return new SaveSurveyResultRepositoryStub()
}
