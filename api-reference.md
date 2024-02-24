# Making API Calls

This document outlines how to make authorized API calls to the Pi Network servers.

## Authorization

All API requests require either an Access Token (Bearer Token) or a Server API Key for authentication.

* **Access Token (Bearer Token):** Used for endpoints that require user-specific data. 
   * Include in the header: `Authorization: Bearer YOUR_ACCESS_TOKEN`
   * See [Authorization: Access Token](docs/authorization/AccessToken.md) 
* **Server API Key:** Used for endpoints with app-level data.
   * Include in the header: `Authorization: YOUR_API_KEY`
   * See [Authorization: Key](docs/authorization/Key.md)

## Available API Endpoints

| Endpoint                                 | Description                                    | Documentation                                      | 
|------------------------------------------|------------------------------------------------|----------------------------------------------------|
| /me                                      | Retrieve information about the authenticated user  | [DOCS](docs/pioneers/me.md)                             |
| /payments                                | Create a new payment request                   | [DOCS](docs/payments/payments.md)                       |
| /payments/{payment_id}/approve           | Approve a pending payment                      | [DOCS](docs/payments/payments_approve.md)               |
| /payments/{payment_id}/complete          | Mark a payment as complete                     | [DOCS](docs/payments/payments_complete.md)              |
| /payments/{payment_id}/cancel            | Cancel a pending or approved payment           | [DOCS](docs/payments/payments_cancel.md)                |
| /payments/incomplete_server_payments     | Retrieve incomplete server-side payments       | [DOCS](docs/payments/payments_incomplete.md)            |
