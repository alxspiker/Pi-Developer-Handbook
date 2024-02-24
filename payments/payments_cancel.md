# Pi Network API: /payments/{payment_id}/cancel

This endpoint allows you to cancel a pending or approved Pi payment from your server.

**URL:** POST https://api.minepi.com/v2/payments/{payment_id}/cancel

**Authorization:** Server API Key (Key Authorization) [See Documentation](../authorization/Key.md)

**Returns:** PaymentDTO object [See Documentation](../types/PaymentDTO.md)

**Important Notes**

* **Obtain `payment_id`:**  The `payment_id` is provided within the `onReadyForServerApproval` callback of the Pi App Platform SDK or when managing existing payments.
* **Reasons for Cancelling:** Consider the scenarios where you might need to cancel a payment from the server-side (e.g., inventory changes, Pioneer-initiated cancellation).

**Example Code (Python)**

```python
import requests

api_key = "your_server_api_key" 
header = {"Authorization": "Key " + api_key}

def cancel_payment(payment_id):
    response = requests.post(f"[invalid URL removed]", headers=header)

    if response.status_code == 200:
        print("Payment successfully cancelled!")
    else:
        print("Error cancelling payment:", response.status_code)
        print(response.text) 

# ... (Example usage within your application's logic)
```