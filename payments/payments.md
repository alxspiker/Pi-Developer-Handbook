# Pi Network API: /payments

These endpoints provide information and allow management of payments within your app.  **Important:** Use the client-side Pi SDK to initiate new payments. 

**Base URL:** https://api.minepi.com/v2/payments 

**Authorization:** Server API Key (Key Authorization) [See Documentation](../authorization/Key.md)

**Returns:**  PaymentDTO object [See Documentation](../types/PaymentDTO.md)

**Important Note:** It sounds like there might be additional endpoints nested under `/payments` for actions like approving or canceling. If so, please provide those specifics so we can create documentation tailored to them.  

**Example Code (Python: Getting Payments)** 

```python
import requests

api_key = "your_server_api_key"  # Replace with your key
header = {"Authorization": "Key " + api_key}
response = requests.get("[https://api.minepi.com/v2/payments](https://api.minepi.com/v2/payments)", headers=header)

if response.status_code == 200:
    payments = response.json()  # Assuming an array of PaymentDTOs
    print("Success! Retrieved Payments:")
    for payment in payments:
        print(payment['identifier'], payment['status']) 
else:
    print("Error:", response.status_code)
    print(response.text) 
```