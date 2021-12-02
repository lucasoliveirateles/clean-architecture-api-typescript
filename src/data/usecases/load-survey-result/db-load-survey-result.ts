import {
  LoadSurveyResult
} from '~/domain/usecases/survey-result/load-survey-result'
import { SurveyResultModel } from '~/domain/models/survey-result'
import {
  LoadSurveyResultRepository
} from '~/data/protocols/db/survey-result/load-survey-result-repository'

export class DbLoadSurveyResult implements LoadSurveyResult {
  constructor (private readonly loadSurveyResultRespository: LoadSurveyResultRepository) {}

  async load (surveyId: string): Promise<SurveyResultModel> {
    await this.loadSurveyResultRespository.loadBySurveyId(surveyId)

    return null
  }
}
