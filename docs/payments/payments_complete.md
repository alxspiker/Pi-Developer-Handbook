# Pi Network API: /payments/{payment_id}/complete

This endpoint finalizes a Pi payment on the server side by providing the blockchain transaction ID (txID). This marks the payment process as fully completed.

**URL:** POST https://api.minepi.com/v2/payments/{payment_id}/complete

**Authorization:** Server API Key (Key Authorization) [See Documentation](../authorization/Key.md)

**Returns:** PaymentDTO object [See Documentation](../types/PaymentDTO.md)

**Workflow**

1. **Obtain `txID`:** The `txID` is provided within the `onReadyForServerCompletion` callback function of the Pi App Platform SDK.
2. **Send to Server:** Pass the `txID` from the frontend to your application's backend.
3. **Call Endpoint:**  Use this endpoint, providing the `payment_id` and `txID` to signal completion to the Pi Network servers. 

**Example Code (Python)**

```python
import requests

api_key = "your_server_api_key" 
header = {"Authorization": "Key " + api_key}

def complete_payment(payment_id, txid):
    data = {'txid': txid} 
    response = requests.post(f"[invalid URL removed]", headers=header, json=data) 

    if response.status_code == 200:
        print("Payment successfully completed!")
    else:
        print("Error completing payment:", response.status_code)
        print(response.text) 

# ... (Inside your code handling the 'onReadyForServerCompletion' callback) 
```