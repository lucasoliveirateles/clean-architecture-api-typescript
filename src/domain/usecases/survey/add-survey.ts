import { SurveyModel } from '~/domain/models/survey'

export type AddSurveyModelParams = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add: (data: AddSurveyModelParams) => Promise<void>
}
