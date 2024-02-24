# Making API Calls
## Headers and Authorization Methods
This is how the Pi Servers will determine if the request is coming from an approved source. There are two formats depending on the endpoint being requested.

### ACCESS TOKEN (BEARER TOKEN)
These API calls require that you provide a Pioneer’s access token to obtain the resource. They are generally related with a Pioneer’s data (e.g: /me). The token is returned from the Pi.Authenticate function of the Pi App Platform SDK.

Those endpoints can be accessed using the following Authorization header:

```Authorization: Bearer <Pioneer's access token>```

Example Code:
```Python
const headers = { headers: { authorization: "Bearer " + { PioneerAccessToken } }};
axios.get("https://api.minepi.com/v2/me", headers);
```

### SERVER API KEY (AUTHORIZATION KEY)
For various reasons, some API calls must be made from the backend or server of your app. To obtain an authorization key for API requests, please see the section of this guide on the Developer Portal.

Those endpoints can be accessed using the following Authorization header:

```Authorization: Key <App Server API Key>```

Example code calling the /payments endpoint to obtain the information on a payment using the paymentID string:
```python
const postingURL = `https://api.minepi.com/v2/payments/${ payment_id }`;
const headers = { headers: { authorization: `key ${ APIKEY }` } };
axios.get(postingURL, null, headers);
```

## API Reference
URL | Description | Auth | Response
GET api.minepi.com/v2/me | Access a Pioneer’s resource and retrieve the Pioneer’s information. | Access token | UserDTO