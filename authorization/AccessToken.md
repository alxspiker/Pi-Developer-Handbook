# Access Token
The access token is a long random string that uniquely identifies a Pioneer within an app. The Access Token is the identifier that Applications use to communicate with the Pi Servers about a Pioneer. The Access Token is designed to protect the Pioneer’s information from unapproved access. This page assumes that you’ve read the Pi SDK page and have an understanding of how the Pi SDK and the Authenticate function work.

## Obtaining
The Access Token is received by calling the Authenticate function of the Pi SDK. No specific scope is required to obtain Access Token as it will come included in all calls to the Authenticate Function.

The Authenticate Function call will return an Access Token as a promise object in the format below:

```js
AuthResults{
    accessToken: string,
    user: {
        uid: string
    }
}
```
Security Note: Do not save or use the accessToken or uid obtained in the Authentication call for purposes other than for display purposes because a malicious actor could pass a forged or corrupt access token. Instead pass the accessToken to your server side and verify it with the /me endpoint of the Pi App Platform APIs. Calling that API will be detailed later on.

The Access Token is a dynamic string and will change at preset time intervals. Apps should not use the access token to create records or store information about a Pioneer. Instead, Apps should verify the access token which returns the correct uid of the Pioneer. To authenticate an access token, the App should pass the access token from its Frontend to its server side, and then call the Pi API /me endpoint.

The uid is a static string which uniquely identifies a Pioneer to an app. The uid that comes with the Authenticate function is unverified and should be treated as not valid. Only the uid received from the /me endpoint of the Pi Platform APIs should be considered valid.

### Verifying the Access Token
Once the App has the Access token in its backend, then it should call the /me endpoint of the Platform APIs. This call will return the UserDTO with the uid and the username. If the access token is not valid for any reason, the call will return a 401 error.

The first step to call the Pi API is to create the Authorization Header that is needed. A Bearer header is combined with the Access Token to validate the call.

Authorization: Bearer <Pioneer's access token obtained from App Frontend>
An example with the required Header using Axios:
```python
const PioneerAccessToken = accessToken_Obtained_from_App_Frontend;
const header = { headers: { authorization: "Bearer " + PioneerAccessToken }};
axios.get("https://api.minepi.com/v2/me", header);
```
The /me endpoint will return either the UserDTO, if the Access Token was valid, or a 401 Error Code if the token was fake or invalid. The returned UserDTO will look as follows:
```js
Object{
    user: {
        uid: string,
        username: string
    }
}
```
The returned uid is static, and since it comes from the /me endpoint, it is the correct uid for the Pioneer and your App. Check out the next section for potential uses of the uid.