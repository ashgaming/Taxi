Backend Server API Documentation

Overview
This document provides an overview of the API routes available in the backend server for managing captains. It includes details about the request methods, expected data formats, and the results returned by each route.

Routes
1. Register Captain
Endpoint: POST /register

Description: Registers a new captain with the provided details.

Request Body:

Json
Insert code

{
  "email": "string (valid email)",
  "fullname": {
    "firstname": "string (min: 3 characters)"
  },
  "password": "string (min: 8 characters)",
  "vehicle": {
    "color": "string (min: 3 characters)",
    "plate": "string (min: 3 characters)",
    "capacity": "string (min: 1 character)",
    "vehicleType": "string (must be one of ['car', 'motorcycle', 'auto'])"
  }
}
Validation Rules:

email: Must be a valid email format.
fullname.firstname: Must be at least 3 characters long.
password: Must be at least 8 characters long.
vehicle.color: Must be at least 3 characters long.
vehicle.plate: Must be at least 3 characters long.
vehicle.capacity: Must be at least 1 character long.
vehicle.vehicleType: Must be one of the following values: car, motorcycle, auto.
Expected Response:

Success (201 Created):
Json
Insert code

{
  "message": "Captain registered successfully",
  "captainId": "string (captain's unique identifier)"
}
Error (400 Bad Request):
Json
Insert code

{
  "errors": [
    {
      "msg": "Error message describing the validation issue",
      "param": "field name"
    }
  ]
}
2. Login User (Commented Out)
Endpoint: POST /login

Description: Authenticates a user and returns a token.

Request Body:

Json
Insert code

{
  "email": "string (valid email)",
  "password": "string (min: 8 characters)"
}
Validation Rules:

email: Must be a valid email format.
password: Must be at least 8 characters long.
Expected Response:

Success (200 OK):
Json
Insert code

{
  "message": "Login successful",
  "token": "string (JWT token)"
}
Error (400 Bad Request):
Json
Insert code

{
  "errors": [
    {
      "msg": "Error message describing the validation issue",
      "param": "field name"
    }
  ]
}
3. Get User Profile (Commented Out)
Endpoint: GET /profile

Description: Retrieves the profile of the authenticated user.

Authentication Required: Yes (uses authMiddleware)

Expected Response:

Success (200 OK):
Json
Insert code

{
  "email": "string (user's email)",
  "fullname": {
    "firstname": "string (user's first name)"
  },
  "vehicle": {
    "color": "string (vehicle color)",
    "plate": "string (vehicle plate)",
    "capacity": "string (vehicle capacity)",
    "vehicleType": "string (vehicle type)"
  }
}
Error (401 Unauthorized):
Json
Insert code

{
  "message": "Unauthorized access"
}
4. Logout User (Commented Out)
Endpoint: GET /logout

Description: Logs out the authenticated user.

Authentication Required: Yes (uses authMiddleware)

Expected Response:

Success (200 OK):
Json
Insert code

{
  "message": "Logout successful"
}
Error (401 Unauthorized):
Json
Insert code

{
  "message": "Unauthorized access"
}
Conclusion
This API provides essential routes for managing captains, including registration, login, and profile management. Each route has specific validation rules to ensure data integrity and security. For any further questions or issues, please refer to the codebase or contact the development team.