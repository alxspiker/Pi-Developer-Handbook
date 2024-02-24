# Pi Network SDK

**Table of Contents**
* [Introduction](#Introduction)
* [Installation](#Installation)
* [Usage](#Usage)
* [Sandbox Environment](#Sandbox-Environment)
* [Functions and Methods](#Functions-and-Methods)

## Introduction

The Pi Network SDK is a JavaScript library that allows developers to integrate Pi Network features into their web applications. The SDK provides a set of methods that can be used to authenticate users, create payments, open share dialogs, and more.

## Installation

To install the Pi Network SDK, add the following script tag to your HTML document:

```html
<script src="https://sdk.minepi.com/pi-sdk.js"></script>
```

## Usage

Once the SDK is installed, you can initialize Pi:

```javascript
Pi.init({ version: "2.0", sandbox: false }); //Set sandbox to true if deploying in a sandbox enviroment
```

The `Pi` class provides a number of methods that can be used to interact with Pi Network. For example, to authenticate a user, you can use the `authenticate` method:

```javascript
Pi.authenticate(['payments'], (error, result) => {
if (error) {
// Handle the error
} else {
// The user has been authenticated
}
});
```

## Sandbox Environment
(Development)

* **Purpose:** The sandbox allows you to test and develop your app in a simulated environment before deploying it to production.
* **Configuration:** 
    * Set the `sandbox: true` flag in your SDK initialization.
    * Obtain your Sandbox URL from the Developer Portal.
* **Sandbox Authorization:** Follow these steps:
    1. Open the Pi App on your mobile device.
    2. Navigate to Pi Utilities.
    3. Click "Authorize Sandbox" and follow the instructions.

## Functions and Methods
[Pi.authenticate()](#piauthenticate)
[Pi.checkUserHasMiningApp()](#picheckuserhasminingapp)
[Pi.checkUserHasPiBrowser()](#picheckuserhaspibrowser)
[Pi.copyText()](#picopytext)
[Pi.createPayment()](#picreatepayment)
[Pi.getPiHostAppName()](#pigetpihostappname)
[Pi.getPiHostAppInfo()](#pigetpihostappinfo)
[Pi.init()](#piinit)
[Pi.nativeFeaturesList()](#pinativefeatureslist)
[Pi.openConversation()](#piopenconversation)
[Pi.openShareDialog()](#piopensharedialog)
[Pi.openUrlInSystemBrowser()](#piopenurlinsystembrowser)
[Pi.requestPermission()](#pirequestpermission)
[Pi.scanQrCode()](#piscanqrcode)

### `Pi.authenticate()`

```typescript
authenticate(t: string[], n?: (c: any) => any): Promise<{
user: any;
accessToken: string;
}>;
```

The `authenticate` method in `pi-sdk` authenticates the user and returns a promise that resolves to an object containing the user's data and an access token.

**Parameters:**

| Name | Type | Description |
|---|---|---|
| `t` | `string[]` | An array of scopes to request. |
| `n` | `(c: any) => any` | A callback function that is called if the user cancels the authentication process. |

**Returns:**

A promise that resolves to an object containing the user's data and an access token.

### `Pi.checkUserHasMiningApp()`

```typescript
checkUserHasMiningApp(): Promise<{
userHasMiningApp: boolean;
}>;
```

The `checkUserHasMiningApp` method in `pi-sdk` checks if the user has the Pi Mining App installed and returns a promise that resolves to an object indicating whether the user has the app installed.

**Returns:**

A promise that resolves to an object indicating whether the user has the Pi Mining App installed.

### `Pi.checkUserHasPiBrowser()`

```typescript
checkUserHasPiBrowser(): Promise<{
userHasPiBrowser: boolean;
}>;
```

The `checkUserHasPiBrowser` method in `pi-sdk` checks if the user has the Pi Browser installed and returns a promise that resolves to an object indicating whether the user has the browser installed.

**Returns:**

A promise that resolves to an object indicating whether the user has the Pi Browser installed.

### `Pi.copyText()`

```typescript
copyText(t: string): Promise<void>;
```

The `copyText` method in `pi-sdk` copies the specified text to the clipboard and returns a promise that resolves when the text has been copied.

**Parameters:**

| Name | Type | Description |
|---|---|---|
| `t` | `string` | The text to copy to the clipboard. |

**Returns:**

A promise that resolves when the text has been copied.

### `Pi.createPayment()`

```typescript
createPayment(t: any, n?: (c: any) => any): c;
```

The `createPayment` method in `pi-sdk` creates a new payment and returns a promise that resolves to a payment object.

**Parameters:**

| Name | Type | Description |
|---|---|---|
| `t` | `any` | The payment data. |
| `n` | `(c: any) => any` | A callback function that is called if the user cancels the payment process. |

**Returns:**

A promise that resolves to a payment object.

### `Pi.getPiHostAppName()`

```typescript
getPiHostAppName(): string | undefined;
```

The `getPiHostAppName` method in `pi-sdk` gets the name of the Pi host app and returns a string representing the name of the app.

**Returns:**

A string representing the name of the Pi host app.

### `Pi.getPiHostAppInfo()`

```typescript
getPiHostAppInfo(): Promise<{
hostApp: string;
}>;
```

The `getPiHostAppInfo` method in `pi-sdk` gets the information about the Pi host app and returns a promise that resolves to an object containing the information.

**Returns:**

A promise that resolves to an object containing the information about the Pi host app.

### `Pi.init()`

```typescript
init(t: {
version: string;
sandbox?: boolean;
}): Promise<void>;
```

The `init` method in `pi-sdk` initializes the SDK and returns a promise that resolves when the SDK is initialized.

**Parameters:**

| Name | Type | Description |
|---|---|---|
| `t` | `{
version: string;
sandbox?: boolean;
}` | The initialization options. |

**Returns:**

A promise that resolves when the SDK is initialized.

### `Pi.nativeFeaturesList()`

```typescript
nativeFeaturesList(): Promise<string[]>;
```

The `nativeFeaturesList` method in `pi-sdk` gets a list of the native features that are supported by the SDK and returns a promise that resolves to an array of strings representing the features.

**Returns:**

A promise that resolves to an array of strings representing the native features that are supported by the SDK.

### `Pi.openConversation()`

```typescript
openConversation(t: string): Promise<void>;
```

The `openConversation` method in `pi-sdk` opens a conversation with the specified conversation ID and returns a promise that resolves when the conversation is opened.

**Parameters:**

| Name | Type | Description |
|---|---|---|
| `t` | `string` | The conversation ID. |

**Returns:**

A promise that resolves when the conversation is opened.

### `Pi.openShareDialog()`

```typescript
openShareDialog(t: string, n: string): Promise<void>;
```

The `openShareDialog` method in `pi-sdk` opens a share dialog with the specified title and sharing message and returns a promise that resolves when the dialog is opened.

**Parameters:**

| Name | Type | Description |
|---|---|---|
| `t` | `string` | The title of the share dialog. |
| `n` | `string` | The sharing message. |

**Returns:**

A promise that resolves when the share dialog is opened.

### `Pi.openUrlInSystemBrowser()`

```typescript
openUrlInSystemBrowser(t: string): Promise<void>;
```

The `openUrlInSystemBrowser` method in `pi-sdk` opens the specified URL in the system browser and returns a promise that resolves when the URL is opened.

**Parameters:**

| Name | Type | Description |
|---|---|---|
| `t` | `string` | The URL to open. |

**Returns:**

A promise that resolves when the URL is opened.

### `Pi.requestPermission()`

```typescript
requestPermission(t: string): Promise<boolean>;
```

The `requestPermission` method in `pi-sdk` requests the specified permission and returns a promise that resolves to a boolean indicating whether the permission was granted.

**Parameters:**

| Name | Type | Description |
|---|---|---|
| `t` | `string` | The permission to request. |

**Returns:**

A promise that resolves to a boolean indicating whether the permission was granted.

### `Pi.scanQrCode()`

```typescript
scanQrCode(t?: any): Promise<string>;
```

The `scanQrCode` method in `pi-sdk` scans a QR code and returns a promise that resolves to a string representing the scanned data.

**Parameters:**

| Name | Type | Description |
|---|---|---|
| `t` | `any` | The configuration options for the QR code scanner. |

**Returns:**

A promise that resolves to a string representing the scanned data.