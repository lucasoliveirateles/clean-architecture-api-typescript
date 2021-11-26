import {
  accountSchema,
  errorSchema,
  loginParamsSchema,
  surveySchema,
  surveysSchema,
  surveyAnswerSchema,
  signUpParamsSchema,
  addSurveyParamsSchema,
  saveSurveyParamsSchema,
  surveyResultSchema
} from './schemas/index'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  error: errorSchema,
  surveys: surveysSchema,
  survey: surveySchema,
  surveyAnswer: surveyAnswerSchema,
  addSurveyParams: addSurveyParamsSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  surveyResult: surveyResultSchema
}
