# Pi Network API: ```/payments/incomplete_server_payments```
This marks a payment as completed by proving to the Pi Servers that your app has obtained the payment’s transaction ID (txID). This is the final step in a payment before the payment flow closes and the Pioneer returns to your app. The txID is obtained through the callback function onReadyForServerCompletion of the Pi App Platform SDK. Passing that txID to your server side and using it to call this endpoint will complete a payment.

Don’t forget that

### URL: GET ```https://api.minepi.com/v2/payments/incomplete_server_payments```
### Auth: [Server API Key](../authorization/Key.md)
### Returns: [PaymentDTO](../types/PaymentDTO.md)

# Examples:
## Python
```python
import requests

# Replace this with your own access token
api_key = "api_key_Obtained_from_App_Frontend"

# Set the header with the access token
header = {"Authorization": "key " + api_key}

# Send the GET request to the Pi API endpoint
response = requests.get(f"https://api.minepi.com/v2/payments/incomplete_server_payments", headers=header)

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