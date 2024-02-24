# Pi Network API: /payments/incomplete_server_payments

This endpoint retrieves a list of payments that are awaiting server-side completion (i.e., awaiting the `txID` to be provided).

**URL:** GET https://api.minepi.com/v2/payments/incomplete_server_payments

**Authorization:** Server API Key (Key Authorization) [See Documentation](../authorization/Key.md)

**Returns:** An array of PaymentDTO objects [See Documentation](../types/PaymentDTO.md)

**Typical Use Cases**

* **Retrieving Pending Payments:** Fetch payments that require finalization from your server.
* **Error Recovery:** If your application experiences an error or interruption, you can use this endpoint to resume the completion process for pending payments.

**Example Code (Python)**

```python
import requests

api_key = "your_server_api_key" 
header = {"Authorization": "Key " + api_key}

response = requests.post("[https://api.minepi.com/v2/payments/incomplete_server_payments](https://api.minepi.com/v2/payments/incomplete_server_payments)", headers=header) 

if response.status_code == 200:
    incomplete_payments = response.json()
    for payment in incomplete_payments:
        # Assuming you have the txID for each payment
        complete_payment(payment['identifier'], payment_txid)  # Using your 'complete_payment' function
else:
    print("Error fetching incomplete payments:", response.status_code)
    print(response.text) 
```