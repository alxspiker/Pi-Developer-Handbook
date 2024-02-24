Making API Calls
Headers and Authorization Methods
This is how the Pi Servers will determine if the request is coming from an approved source. There are two formats depending on the endpoint being requested.

ACCESS TOKEN (BEARER TOKEN)
These API calls require that you provide a Pioneer’s access token to obtain the resource. They are generally related with a Pioneer’s data (e.g: /me). The token is returned from the Pi.Authenticate function of the Pi App Platform SDK.

Those endpoints can be accessed using the following Authorization header:

Authorization: Bearer <Pioneer's access token>
Example Code:
```Python
const headers = { headers: { authorization: "Bearer " + { PioneerAccessToken } }};
axios.get("https://api.minepi.com/v2/me", headers);
```