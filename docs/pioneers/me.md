# Pi Network API: /me

This endpoint provides verified Pioneer information associated with the provided Access Token.

**URL:** GET https://api.minepi.com/v2/me

**Authorization:** Access Token (Bearer Token) [See Access Token Documentation](../authorization/AccessToken.md)

**Returns:** UserDTO object [See UserDTO Documentation](../types/UserDTO.md)

**Purpose**

* **Retrieve Pioneer UID:** Obtain the app-specific unique identifier for the authenticated Pioneer. 
* **Get Pioneer Username:** Access the Pioneer's Pi Network username (if the `username` scope was granted during authentication).

**Example Code (Python)**

```python
import requests

access_token = "accessToken_Obtained_from_App_Frontend"  # Replace with your token
header = {"Authorization": "Bearer " + access_token}
response = requests.get("[https://api.minepi.com/v2/me](https://api.minepi.com/v2/me)", headers=header)

if response.status_code == 200:
    userDTO = response.json()
    print("Success!")
    print("Pioneer UID:", userDTO['uid'])
    print("Pioneer Username:", userDTO['username'])  # If 'username' scope was granted
else:
    print("Error:", response.status_code)
    print(response.text) 
```