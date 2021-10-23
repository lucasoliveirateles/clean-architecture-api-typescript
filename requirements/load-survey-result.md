# Poll Result

> ## Success case

1. ✅ Receives a request of type **GET** in the route **/api/surveys/{survey_id}/results**
2. ✅ Validates if the request was made by a **user**
3. ✅ Returns **200** with poll result data

> ## Exceptions

1. ✅ Return **404** error if API does not exist
2. ✅ Returns **403** error if not a user
3. ✅ Returns **500** error if there is an error when trying to list the poll results