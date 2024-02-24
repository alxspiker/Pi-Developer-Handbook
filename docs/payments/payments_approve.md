# Pi Network API: /payments/{payment_id}/approve

This endpoint enables server-side approval of a pending Pi payment, a required step before the Pioneer can finalize the transaction on the blockchain.

**URL:** POST https://api.minepi.com/v2/payments/{payment_id}/approve

**Authorization:** Server API Key (Key Authorization) [See Documentation](../authorization/Key.md)

**Returns:** PaymentDTO object [See Documentation](../types/PaymentDTO.md)

**Important Notes**

* **Obtain `payment_id`:**  The `payment_id` is provided as an argument within the `onReadyForServerApproval` callback function of the Pi App Platform SDK.
* **Asynchronous Process:** Approving a payment on the server side does not instantly complete the transaction. The Pioneer must still confirm it within the Pi Browser.

**Example Code (Python)**

```python
import requests

api_key = "your_server_api_key" 
header = {"Authorization": "Key " + api_key}

def handle_payment_approval(payment_id):  
    response = requests.post(f"[https://api.minepi.com/v2/payments/](https://api.minepi.com/v2/payments/){payment_id}/approve", headers=header)

    if response.status_code == 200:
        print("Payment approved on server!")
        # Potentially update your application's UI or database
    else:
        print("Error approving payment:", response.status_code)
        print(response.text) 

# ... (Inside your code handling the 'onReadyForServerApproval' callback) 
handle_payment_approval(payment_id) 
```