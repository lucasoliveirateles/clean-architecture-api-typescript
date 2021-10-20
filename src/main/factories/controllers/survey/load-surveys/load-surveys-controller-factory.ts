import { Controller } from '../../../../../presentation/protocols'
import {
  LoadSurveysController
} from '../../../../../presentation/controllers/survey/load-surveys/load-surveys-controller'

import {
  makeLogControllerDecorator
} from '../../../decorators/log-controller-decorator-factory'
import {
  makeDbLoadSurveys
} from '../../../usecases/survey/load-surveys/db-load-surveys'

export const makeLoadSurveysController = (): Controller => {
  const controller = new LoadSurveysController(makeDbLoadSurveys())

  return makeLogControllerDecorator(controller)
}
