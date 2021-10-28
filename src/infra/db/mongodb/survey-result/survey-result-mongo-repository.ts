import {
  SaveSurveyResultRepository
} from '~/data/usecases/survey-result/save-survey-result/db-save-survey-result-protocols'
import { SurveyResultModel } from '~/domain/models/survey-result'
import {
  SaveSurveyResultModel
} from '~/domain/usecases/survey-result/save-survey-result'
import { MongoHelper } from '~/infra/db/mongodb/helpers/mongo-helper'

export class SurveyResultMongoRepository implements SaveSurveyResultRepository {
  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    const surveyResultCollection = await MongoHelper.getCollection('surveyResults')

    const response = await surveyResultCollection.findOneAndUpdate({
      surveyId: data.surveyId,
      accountId: data.accountId
    }, {
      $set: {
        answer: data.answer,
        date: data.date
      }
    }, {
      upsert: true,
      returnOriginal: false
    })

    return response.value && MongoHelper.map(response.value)
  }
}
