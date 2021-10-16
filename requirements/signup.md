# Register

> ## Success case

1. ✅ Receives a request of type **POST** in the route **/api/signup**
2. ✅ Validates mandatory data **name**, **email**, **password** and **passwordConfirmation**
3. ✅ Validates that **password** and **passwordConfirmation** are the same
4. ✅ Validates that the **email** field is a valid email
5. ✅ **Validates** if there is already a user with the email provided
6. ✅ Generates a **encrypted** password (this password cannot be decrypted)
7. ✅ **Creates** an account for the user with the data entered, **replacing** the password with the encrypted password
8. ✅ Generates an access **token** from the user ID
9. ✅ **Updates** user data with generated access token
10. ✅ Returns **200** with access token and username

> ## Exceptions

1. ✅ Return **404** error if API does not exist
2. ✅ Returns **400** error if name, email, password or passwordConfirmation are not provided by the client
3. ✅ Returns **400** error if password and passwordConfirmation are not the same
4. ✅ Returns **400** error if the email field is an invalid email
5. ✅ Returns **403** error if the email provided is already in use
6. ✅ Returns **500** error if there is an error when trying to generate an encrypted password
7. ✅ Returns **500** error if there is an error when trying to create the user account
8. ✅ Returns **500** error if there is an error when trying to generate the access token
9. ✅ Returns **500** error if there is an error when trying to update the user with the generated access token