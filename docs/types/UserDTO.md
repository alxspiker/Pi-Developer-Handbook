# UserDTO Object

This document defines the structure of the UserDTO object returned by Pi Network API endpoints that provide Pioneer information.

## Data Structure

```javascript
type UserDTO = {
  "uid": string, // A unique, app-specific identifier for the Pioneer.
  "username": string, // The Pioneer's Pi Network username (requires the 'username' scope).
}
```