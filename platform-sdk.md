# Pi App Platform SDK

The Pi App Platform SDK enables developers to interact with the Pi Network servers and integrate Pi-powered features into their applications.

## Installation

**1. Include the SDK Script** 

Add the following script tag within your app's main HTML file:

```html
<script src="https://sdk.minepi.com/pi-sdk.js"></script>
```

**2. Initialize the SDK**

Call the `Pi.init()` function, specifying the current SDK version:

```javascript
<script> 
    Pi.init({ version: "2.0" }) // Replace 2.0 with the latest version
</script>
```

## Sandbox Environment (Development)

* **Purpose:** The sandbox allows you to test and develop your app in a simulated environment before deploying it to production.
* **Configuration:** 
    * Set the `sandbox: true` flag in your SDK initialization.
    * Obtain your Sandbox URL from the Developer Portal.
* **Sandbox Authorization:** Follow these steps:
    1. Open the Pi App on your mobile device.
    2. Navigate to Pi Utilities.
    3. Click "Authorize Sandbox" and follow the instructions.

## Authentication

* **`Pi.authenticate()`:**  Requests Pioneer data. It uses "scopes" to specify the type of information you need.
* **Security:** Always verify the `accessToken` and `uid` on your server-side using the `/me` API endpoint [API Docs](pioneers/me.md).

**Example: Requesting Username**

```javascript
const scopes = ['username']; 

function onIncompletePaymentFound(payment) { 
    // Handle incomplete payments if needed
}

Pi.authenticate(scopes, onIncompletePaymentFound)
    .then(auth => {
        console.log("Access Token:", auth.accessToken);
        console.log("Pioneer Username:", auth.user.username); 
    }).catch(error => {
        console.error("Authentication Error:", error); 
    });
```

## Payments

* **Overview:** Pi payments follow a 3-step process:
    1. **Create Payment (Client-Side):**  Use `Pi.createPayment()`.
    2. **Approve Payment (Server-Side):**  Handle the `onReadyForServerApproval` callback and use [ /payments/{payment_id}/approve API](payments/payments_approve.md).
    3. **Complete Payment (Server-Side):** Handle the `onReadyForServerCompletion` callback and use [/payments/{payment_id}/complete API](payments/payments_complete.md).

**Example: Creating a Payment**

```javascript
const paymentData = {
    amount: 1, 
    memo: 'This is a Test Payment',
    metadata: { InternalPaymentID: 1234 }, 
};

const paymentCallbacks = {
    onReadyForServerApproval: (paymentId) => {
        // Send paymentId to server for approval 
    },
    onReadyForServerCompletion: (paymentId, txid) => {
       // Send paymentId and txid to server for completion  
    },
    onCancel: (paymentId) => { /* ... */ }, 
    onError: (error, payment) => { /* ... */ } 
};

Pi.createPayment(paymentData, paymentCallbacks)
    .then(payment => {
        console.log("Payment Created:", payment); 
    }).catch(error => {
        console.error("Payment Error:", error); 
    });
```