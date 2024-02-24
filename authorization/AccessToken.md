## Access Token (Bearer Token)

API calls requiring Pioneer-specific data use Access Tokens obtained via the Pi App Platform SDK's `Pi.Authenticate` function. Include the token in the Authorization header:

    ```
    Authorization: Bearer <Pioneer's access token>
    ```

**Example Code (Python):**

    ```python
    const headers = { headers: { authorization: "Bearer " + { PioneerAccessToken } }};
    axios.get("[https://api.minepi.com/v2/me](https://api.minepi.com/v2/me)", headers);
    ```

## Obtaining an Access Token

The `Pi.Authenticate` function of the Pi SDK provides an `AuthResults` object:

    ```js
    AuthResults{
      accessToken: string,
      user: {
        uid: string 
      }
    }
    ```

**Security Note:** Use the `accessToken` from the frontend  *only* for verification with the `/me` API endpoint. Do not store it long-term for identifying the Pioneer, as it is dynamic.

## Verifying the Access Token

1. **Pass to Backend:** Send the `accessToken` from your frontend to your server.
2. **Call `/me` Endpoint:** Make a request to the Pi API's `/me` endpoint using the following header format:

    ```
    Authorization: Bearer <Pioneer's access token>
    ```

   **Example (Python with Axios):**
    ```python
    const PioneerAccessToken = accessToken_Obtained_from_App_Frontend;
    const header = { headers: { authorization: "Bearer " + PioneerAccessToken }};
    axios.get("[https://api.minepi.com/v2/me](https://api.minepi.com/v2/me)", header);
    ```

3. **Handle Response:**
   * **Success (200):** The `/me` endpoint returns a `UserDTO` object containing the verified `uid`:

     ```js
     Object{
       user: {
         uid: string, 
         username: string 
       }
     }
     ```
   * **Error (401):** The Access Token is invalid.

## Using the uid within your App

* **Create Unique Records:** The verified `uid` from the `/me` endpoint can reliably create unique records in your app's database.
* **Personalized Experience:** Use the `uid` to retrieve stored information like purchases or progress, enabling seamless login-free personalization.

**Important:** Use the verified `uid` from the `/me` endpoint, *not* the initial `uid` returned by `Pi.Authenticate`.