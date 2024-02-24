# Making API Calls

This document outlines how to make authorized API calls to the Pi Network servers.

## Authorization

All API requests require either an Access Token (Bearer Token) or a Server API Key for authentication.

* **Access Token (Bearer Token):** Used for endpoints that require user-specific data. 
   * Include in the header: `Authorization: Bearer YOUR_ACCESS_TOKEN`
   * See [Authorization: Access Token](authorization/AccessToken.md) 
* **Server API Key:** Used for endpoints with app-level data.
   * Include in the header: `Authorization: YOUR_API_KEY`
   * See [Authorization: Key](authorization/Key.md)

## Available API Endpoints

| Endpoint                                 | Description                                    | Documentation                                      | 
|------------------------------------------|------------------------------------------------|----------------------------------------------------|
| /me                                      | Retrieve information about the authenticated user  | [DOCS](pioneers/me.md)                             |
| /payments                                | Create a new payment request                   | [DOCS](payments/payments.md)                       |
| /payments/{payment_id}/approve           | Approve a pending payment                      | [DOCS](payments/payments_approve.md)               |
| /payments/{payment_id}/complete          | Mark a payment as complete                     | [DOCS](payments/payments_complete.md)              |
| /payments/{payment_id}/cancel            | Cancel a pending or approved payment           | [DOCS](payments/payments_cancel.md)                |
| /payments/incomplete_server_payments     | Retrieve incomplete server-side payments       | [DOCS](payments/payments_incomplete.md)            |
