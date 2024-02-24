# Pi Network API: ```/payments/{payment_id}/cancel```
This marks a payment as cancelled.

Don’t forget that

### URL: GET ```https://api.minepi.com/v2/payments/{payment_id}/cancel```
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

# Get paymentid from onReadyForServerApproval event
payment_id = "example_payment_id"

# Send the GET request to the Pi API endpoint
response = requests.get(f"https://api.minepi.com/v2/payments/{payment_id}/cancel", headers=header)

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