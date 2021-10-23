# Answer poll

> ## Success case

1. ✅ Receives a request of type **PUT** in the route **/api/surveys/{survey_id}/results**
2. ✅ Validates if the request was made by a **user**
3. ✅ Validate the **survey_id** parameter
4. ✅ Validates if the **answer** field is a valid answer
5. ✅ **Creates** a poll result with the data provided if you do not have a record
6. ✅ **Updates** a poll result with the data provided if you already have a record
7. ✅ Returns **200** with poll result data

> ## Exceptions

1. ✅ Return **404** error if API does not exist
2. ✅ Returns **403** error if not a user
3. ✅ Returns **403** error if survey_id passed in URL is invalid
4. ✅ Returns **403** error if the response sent by the client is an invalid response
5. ✅ Returns **500** error if there is an error when trying to create the poll result
6. ✅ Returns **500** error if there is an error when trying to update the poll result
7. ✅ Returns **500** error if there is an error when trying to load the poll