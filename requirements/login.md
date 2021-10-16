# Login

> ## Success case

1. ✅ Receives a request of type **POST** in the route **/api/login**
2. ✅ Validates mandatory **email** and **password** data
3. ✅ Validates that the **email** field is a valid email
4. ✅ **Search** the user with the email and password provided
5. ✅ Generates an access **token** from the user ID
6. ✅ **Updates** user data with generated access token
7. ✅ Returns **200** with access token and username

> ## Exceptions

1. ✅ Return **404** error if API does not exist
2. ✅ Return error **400** if email or password is not provided by the client
3. ✅ Returns **400** error if the email field is an invalid email
4. ✅ Returns **401** error if it doesn't find a user with the given data
5. ✅ Returns **500** error if there is an error when trying to generate the access token
6. ✅ Returns **500** error if there is an error when trying to update the user with the generated access token