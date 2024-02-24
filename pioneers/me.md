# Pi Network API: ```/me```
Access a Pioneer’s resource and retrieve the Pioneer’s information.

### URL: GET ```https://api.minepi.com/v2/me```
### Auth: [Access token](../authorization/AccessToken.md)
### Returns: [UserDTO](../types/UserDTO.md)

# Examples:
## Python
```python
import requests

# Replace this with your own access token
access_token = "accessToken_Obtained_from_App_Frontend"

# Set the header with the access token
header = {"Authorization": "Bearer " + access_token}

# Send the GET request to the Pi API endpoint
response = requests.get("https://api.minepi.com/v2/me", headers=header)

# Check the status code and the response content
if response.status_code == 200:
    print("Success!")
    print(response.json())
else:
    print("Error!")
    print(response.text)
```
### Response On Success:
```
Success!
```
### Response On Error:
```
Error!
```