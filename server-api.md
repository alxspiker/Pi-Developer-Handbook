# Making API Calls
## Headers and Authorization Methods
This is how the Pi Servers will determine if the request is coming from an approved source. There are two formats depending on the endpoint being requested.

### [ACCESS TOKEN (BEARER TOKEN)](authorization/AccessToken.md)

### [SERVER API KEY (AUTHORIZATION KEY)](authorization/Key.md)

# Available API Endpoints
Endpoint | Links
--- | ---
/me | [DOCS](pioneers/me.md)
/payments | [DOCS](payments/payments.md)
/payments/{payment_id}/approve | [DOCS](payments/payments_approve.md)
/payments/{payment_id}/complete | [DOCS](payments/payments_complete.md)
/payments/{payment_id}/cancel | [DOCS](payments/payments_cancel.md)
/payments/incomplete_server_payments | [DOCS](payments/payments_incomplete.md)