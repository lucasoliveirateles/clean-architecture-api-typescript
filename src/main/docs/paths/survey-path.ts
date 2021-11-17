export const surveyPath = {
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['survey'],
    summary: 'API to list surveys',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/surveys'
            }
          }
        }
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
