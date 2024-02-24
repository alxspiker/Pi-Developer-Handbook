# PaymentDTO Object

This document outlines the structure of the PaymentDTO object returned by Pi Network API calls related to payments.

## Data Structure

```javascript
{
  // Payment data:
  "identifier": string, // The unique payment identifier
  "Pioneer_uid": string, // The Pioneer's app-specific ID
  "amount": number, // The payment amount
  "memo": string, // A developer-provided string, shown to the Pioneer
  "metadata": Object, // An object for developer-specific data
  "to_address": string, // The recipient's blockchain address
  "created_at": string, // Timestamp of payment creation

  // Status flags:
  "status": {
    "developer_approved": boolean, // Server-side approval status
    "transaction_verified": boolean, // Blockchain transaction verification status
    "developer_completed": boolean, // Server-side completion status
    "canceled": boolean, // Canceled by the developer or Pi Network
    "Pioneer_cancelled": boolean, // Canceled by the Pioneer
  },

  // Blockchain transaction data (populated if a transaction exists):
  "transaction": null | { 
    "txid": string, // The blockchain transaction ID
    "verified": boolean, // True if the transaction matches the payment
    "_link": string, // A link to the operation on the Blockchain API
  },
};
```