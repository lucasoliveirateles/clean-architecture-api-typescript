# Create Poll

> ## Success case

1. ✅ Receives a request of type **POST** in the route **/api/surveys**
2. ✅ Validates if the request was made by an **admin**
3. ✅ Validates mandatory data **question** and **answers**
4. ✅ **Creates** a poll with the data provided
5. ✅ Returns **204**, no data

> ## Exceptions

1. ✅ Return **404** error if API does not exist
2. ✅ Return error **403** if user is not admin
3. ✅ Return **400** error if question or answers are not provided by the client
4. ✅ Returns **500** error if there is an error when trying to create the poll