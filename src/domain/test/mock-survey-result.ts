import { SurveyResultModel } from '~/domain/models/survey-result'
import {
  SaveSurveyResultModelParams
} from '~/domain/usecases/survey-result/save-survey-result'

export const mockSurveyResultParams = (): SaveSurveyResultModelParams => ({
  accountId: 'any_account_id',
  surveyId: 'any_survey_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockSurveyResultModel = (): SurveyResultModel =>
  Object.assign({}, mockSurveyResultParams(), {
    id: 'any_id'
  })
