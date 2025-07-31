# Pi Network SDK Examples

This directory contains updated examples that demonstrate best practices for Pi Network SDK integration, including proper Pi Browser detection.

## 🔄 What's Updated

All examples have been updated to implement the Pi Browser detection pattern from the [SDK Browser Detection Guide](../guides/sdk-browser-detection.md).

### Key Improvements

- **No more immediate authentication** - Apps now wait for user interaction
- **Pi Browser detection** - Smart detection using `Pi.getPiHostAppInfo()` with fallbacks
- **Graceful fallbacks** - Clean UI for non-Pi Browser users
- **Better UX** - No scary authentication popups in regular browsers

## 📁 Examples

### 1. basic-login-and-pay
**Before:** Called `Pi.authenticate()` immediately on page load  
**After:** Detects Pi Browser first, shows login button only in Pi Browser, provides fallback UI for regular browsers

### 2. python-login-pay-subscriptions  
**Before:** Auto-login on page load  
**After:** Detects Pi Browser, shows login button for Pi users, provides fallback message for regular browsers

### 3. Pi-Network-SDK-Example
**Before:** All SDK functions available without detection  
**After:** Detects Pi Browser, hides SDK features in regular browsers, shows clear warning message

## 🛠️ Utility

### utils/pi-browser-detection.js
A reusable utility that provides:
- `detectPiBrowser()` - Async function to detect Pi Browser
- `createFallbackUI()` - Helper to create fallback UI elements  
- `useIsPiBrowser()` - React-style hook simulation for vanilla JS

## 🎯 Benefits

✅ **Hybrid App Support** - Works in both Web2 and Web3 environments  
✅ **Clean UX** - No confusing popups in regular browsers  
✅ **Proper Authentication Flow** - User-initiated login only  
✅ **Fallback UI** - Clear messaging for non-Pi Browser users  
✅ **Production Ready** - Includes proper cleanup and error handling

## 🚀 Usage Pattern

```javascript
// 1. Detect Pi Browser
const isPiBrowser = await detectPiBrowser();

// 2. Show appropriate UI
if (!isPiBrowser) {
    // Show fallback UI
    showFallbackMessage();
    return;
}

// 3. Only then enable Pi features
enablePiFeatures();
```

This pattern ensures your Pi Network apps work smoothly across all environments while providing the best possible experience for Pi Browser users.