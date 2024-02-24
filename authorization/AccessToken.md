### ACCESS TOKEN (BEARER TOKEN)
These API calls require that you provide a Pioneer’s access token to obtain the resource. They are generally related with a Pioneer’s data (e.g: /me). The token is returned from the Pi.Authenticate function of the Pi App Platform SDK.

Those endpoints can be accessed using the following Authorization header:

```Authorization: Bearer <Pioneer's access token>```

Example Code:
```Python
const headers = { headers: { authorization: "Bearer " + { PioneerAccessToken } }};
axios.get("https://api.minepi.com/v2/me", headers);
```

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

## Using the uid within your App
### Create Unique Database Records
Using the verified uid which is obtained from the /me Pi Platform API endpoint, the app can create a unique record for each Pioneer within its DB. The uid is static and will not change; however, it is important to not use the uid that is returned by the Pi Platform SDK Authenticate function because it is not verified. Once the record is created using the uid, then it can be used to store any usage information such as purchases, progress within a game, etc.

### No Pioneer Sign-In Required
Everytime a Pioneer visits the app, the Pi Platform SDK Authenticate function will be called. This will return the Access Token, which needs to be verified. Once that token is verified the uid can be used to locate the Pioneer’s record within the app’s Database, which enables the app to personalize the Pioneer’s experience.

For example, you have an app that offers videos that require purchase. Upon visiting the site within the Pi Browser, the Pioneer is first presented with a loading screen. Within a few seconds, when the app has received and verified the access token, then the homepage can load. Using the uid, the app now displays to the Pioneer all of the videos that they’ve purchased in the past. Included the uid is the username that can be displayed in a custom header on the app homepage so the Pioneer knows they are accessing their account. In addition, the app could use the Pioneer’s purchase history to recommend new videos. This is all done without the Pioneer signing in or remembering any passwords, making for a seamless user experience.