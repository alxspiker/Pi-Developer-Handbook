# Pi Network API: ```/payments```
The APIs for payments all have the base route ```/payments```. It is important to not create payments using the Platform API. Use the client-side SDK for this purpose.

### URL: GET ```https://api.minepi.com/v2/payments```
### Auth: [Server API Key](../authorization/Key.md)
### Returns: [UserDTO](../types/PaymentDTO.md)

# Examples:
## Python
```python
import requests

# Replace this with your own access token
api_key = "api_key_Obtained_from_App_Frontend"

# Set the header with the access token
header = {"Authorization": "key " + api_key}

# Send the GET request to the Pi API endpoint
response = requests.get("https://api.minepi.com/v2/payments", headers=header)

# Check the status code and the response content
if response.status_code == 200:
    print("Success!")
    print(response.json())
else:
    print("Error!")
    print(response.text)
```
Response On Success:
```
Success!
```
Response On Error:
```
Error!
```