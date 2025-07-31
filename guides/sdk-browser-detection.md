# Pi Browser SDK Detection (Hybrid App Strategy)

A lightweight, non-intrusive way to detect Pi Browser and conditionally render app features.

## ✅ Why this matters

Many Pi apps are now going hybrid — supporting Web2 access (normal browsers) and Web3 features (inside Pi Browser). However, the Pi SDK doesn't provide a bulletproof, built-in method to check if the user is inside Pi Browser.

This logic is critical for:

- **showing/hiding QR codes** or Pi-only features
- **avoiding early Pi.authenticate() calls** that trigger scary popups
- **giving clean UX** across both environments

## The Solution: useIsPiBrowser() Custom Hook (React)

```js
// hooks/useIsPiBrowser.js
import { useEffect, useState } from "react";

const useIsPiBrowser = () => {
  const [isInPiBrowser, setIsInPiBrowser] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const detect = async () => {
      const timeout = new Promise((resolve) =>
        setTimeout(() => resolve("timeout"), 3000)
      );

      try {
        if (window?.Pi?.getPiHostAppInfo) {
          const result = await Promise.race([
            window.Pi.getPiHostAppInfo(),
            timeout,
          ]);

          if (!cancelled && result?.hostApp === "pi-browser") {
            setIsInPiBrowser(true);
            return;
          }
        }
      } catch (e) {
        console.warn("❌ Pi SDK detection failed", e);
      }

      // Fallback: User-Agent or Referrer
      const ua = navigator?.userAgent?.toLowerCase() || "";
      const isLikelyPi =
        ua.includes("pibrowser") || document.referrer.includes("minepi.com");

      if (!cancelled) {
        setIsInPiBrowser(isLikelyPi);
      }
    };

    detect();
    return () => {
      cancelled = true;
    };
  }, []);

  return isInPiBrowser; // true | false | null
};

export default useIsPiBrowser;
```

## Example Usage

```js
import useIsPiBrowser from "../hooks/useIsPiBrowser";

const PiOnlyBanner = () => {
  const isInPi = useIsPiBrowser();

  if (isInPi === null) return null; // still detecting
  if (!isInPi) {
    return (
      <div>
        <p>This feature is only available in the Pi Browser.</p>
        <a href="https://pinet.com/YOUR_APP_LINK">Open in Pi Browser</a>
      </div>
    );
  }

  return null; // Inside Pi Browser – don't show anything
};
```

## Important Tips

- **Don't call Pi.authenticate() on load** — wait for user interaction (like donate, post, etc.)
- **Wrap SDK-based features conditionally** if `isInPiBrowser !== true`
- **Provide fallback UI** for Web2 users (QR code, redirect link, banner, etc.)

## Final Words

Hybrid apps are the bridge to Pi's mainstream adoption. Smart SDK detection avoids bad UX and keeps your app clean.

## Need a jumpstart?

Head to [pi-sdk-starter](https://github.com/cross555/pi-sdk-starter) — a complete template with essential features like Donate, Connect Wallet, and Ad Rewards already wired up. Plug it in, customize, and ship faster.