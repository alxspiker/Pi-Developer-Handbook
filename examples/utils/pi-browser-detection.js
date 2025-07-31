/**
 * Pi Browser Detection Utility
 * 
 * A lightweight utility for detecting Pi Browser in hybrid applications.
 * Based on the guide in guides/sdk-browser-detection.md
 */

/**
 * Detects if the current environment is Pi Browser
 * @param {number} timeoutMs - Timeout for SDK detection in milliseconds (default: 3000)
 * @returns {Promise<boolean>} - true if in Pi Browser, false otherwise
 */
async function detectPiBrowser(timeoutMs = 3000) {
    const timeout = new Promise((resolve) =>
        setTimeout(() => resolve("timeout"), timeoutMs)
    );

    try {
        if (window?.Pi?.getPiHostAppInfo) {
            const result = await Promise.race([
                window.Pi.getPiHostAppInfo(),
                timeout,
            ]);

            if (result?.hostApp === "pi-browser") {
                return true;
            }
        }
    } catch (e) {
        console.warn("❌ Pi SDK detection failed", e);
    }

    // Fallback: User-Agent or Referrer detection
    const ua = navigator?.userAgent?.toLowerCase() || "";
    const isLikelyPi = ua.includes("pibrowser") || document.referrer.includes("minepi.com");
    
    return isLikelyPi;
}

/**
 * Creates a fallback UI element for non-Pi Browser users
 * @param {string} message - Custom message to display
 * @returns {HTMLElement} - DOM element with fallback UI
 */
function createFallbackUI(message = "This app requires Pi Browser to access Pi Network features.") {
    const div = document.createElement('div');
    div.style.cssText = `
        background: #fff3cd; 
        border: 1px solid #ffeaa7; 
        padding: 15px; 
        border-radius: 5px; 
        margin: 10px 0;
    `;
    
    div.innerHTML = `
        <strong>⚠️ Pi Browser Required</strong><br>
        ${message}<br>
        <a href="https://pinet.com/" target="_blank" style="color: #7B1FA2; text-decoration: underline;">
            Open in Pi Browser
        </a>
    `;
    
    return div;
}

/**
 * React-style hook simulation for vanilla JavaScript
 * @param {Function} callback - Callback function to execute with detection result
 */
function useIsPiBrowser(callback) {
    let cancelled = false;
    
    detectPiBrowser().then(result => {
        if (!cancelled) {
            callback(result);
        }
    });
    
    // Return cleanup function
    return () => {
        cancelled = true;
    };
}

// Export for use in other files
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { detectPiBrowser, createFallbackUI, useIsPiBrowser };
}

// Global availability for script tags
if (typeof window !== 'undefined') {
    window.PiBrowserDetection = { detectPiBrowser, createFallbackUI, useIsPiBrowser };
}