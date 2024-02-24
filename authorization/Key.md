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