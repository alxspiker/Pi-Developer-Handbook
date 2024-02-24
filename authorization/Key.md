## Server API Key (Authorization Key)

Certain API calls require authorization from your app's server-side for security reasons. To use a Server API Key:

1. **Obtain from the Developer Portal:** Instructions for generating a Server API Key can be found in the appropriate section of the Developer Portal guide.

2. **Include in Authorization Header:**  Add the key to your API requests in the following format:

    ```
    Authorization: Key <Your App's Server API Key>
    ```

**Example Code (Python: Payments Endpoint)**

```python
const postingURL = `https://api.minepi.com/v2/payments/${payment_id}`;
const headers = { headers: { authorization: `Key ${APIKEY}` } };
axios.get(postingURL, null, headers); 
```

**Important Notes**

* **Secure Storage:** Protect your Server API Key. Store it securely on your server and never expose it in client-side code.
* **Refer to Developer Portal:** The Developer Portal will provide the most up-to-date instructions for API Key management and usage within specific API endpoints.

**Enhancements**

* **Purpose:** Add a sentence or two clarifying the types of actions that typically require a Server API Key (e.g.,  processing payments, accessing sensitive Pioneer data).
* **Link to Developer Portal:** Provide a direct link to the relevant section of the Developer Portal for easy reference.