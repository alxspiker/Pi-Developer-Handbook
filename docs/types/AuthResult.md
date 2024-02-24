# AuthResult Object

This document outlines the structure of the PaymentDTO object returned by Pi Network API calls related to payments.

## Data Structure

```javascript
type AuthResult = {
  accessToken: string,
  user: {
    uid: string,
    username: string
  }
}
```