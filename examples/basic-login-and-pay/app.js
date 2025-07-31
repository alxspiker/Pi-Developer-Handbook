Pi.init({ version: "2.0" }); // Initialize the SDK 

const appStatus = document.getElementById('app-status'); 
const payButton = document.getElementById('payButton'); 

// Pi Browser Detection Logic
let isInPiBrowser = null;

async function detectPiBrowser() {
    const timeout = new Promise((resolve) =>
        setTimeout(() => resolve("timeout"), 3000)
    );

    try {
        if (window?.Pi?.getPiHostAppInfo) {
            const result = await Promise.race([
                window.Pi.getPiHostAppInfo(),
                timeout,
            ]);

            if (result?.hostApp === "pi-browser") {
                isInPiBrowser = true;
                return true;
            }
        }
    } catch (e) {
        console.warn("❌ Pi SDK detection failed", e);
    }

    // Fallback: User-Agent or Referrer
    const ua = navigator?.userAgent?.toLowerCase() || "";
    const isLikely = ua.includes("pibrowser") || document.referrer.includes("minepi.com");
    
    isInPiBrowser = isLikely;
    return isLikely;
}

// Initialize app based on browser detection
async function initializeApp() {
    const isPiBrowser = await detectPiBrowser();
    
    if (!isPiBrowser) {
        appStatus.innerHTML = `
            <div style="padding: 20px; background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px; margin: 10px 0;">
                <h3>⚠️ Pi Browser Required</h3>
                <p>This app requires Pi Browser to function properly.</p>
                <a href="https://pinet.com/" target="_blank" style="color: #7B1FA2; text-decoration: underline;">
                    Open in Pi Browser
                </a>
            </div>
        `;
        payButton.disabled = true;
        payButton.textContent = "Requires Pi Browser";
        return;
    }

    // Only authenticate if in Pi Browser and user clicks login
    appStatus.textContent = "Ready to login. Click the login button below.";
    
    // Create login button
    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login with Pi';
    loginButton.style.cssText = 'margin: 10px 0; padding: 10px 20px; background: #7B1FA2; color: white; border: none; border-radius: 5px; cursor: pointer;';
    appStatus.appendChild(loginButton);
    
    loginButton.addEventListener('click', async () => {
        try {
            loginButton.disabled = true;
            loginButton.textContent = 'Logging in...';
            
            const authResult = await Pi.authenticate(['username', 'payments']);
            appStatus.textContent = `Logged in as: ${authResult.user.username}`;
            payButton.disabled = false;
            loginButton.style.display = 'none';
        } catch (error) {
            appStatus.textContent = "Login Error"; 
            console.error(error);
            loginButton.disabled = false;
            loginButton.textContent = 'Retry Login';
        }
    });
}

// Initialize the app
initializeApp();

// Pay button logic 
payButton.addEventListener('click', () => {
    const paymentData = {
        amount: 1, 
        memo: 'This is a Test Payment',
        metadata: { InternalPaymentID: 1234 } 
    };

    const paymentCallbacks = {
        onReadyForServerApproval: (paymentId) => {
            // Send paymentId to your server for approval
            fetch('/api/payments/approve', { // Example fetch call
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ paymentId })
            })
            .then(response => {
                if (!response.ok) throw new Error('Approval Error');
                appStatus.textContent = "Payment Approved!";
            })
            .catch(error => {
                console.error(error);
                appStatus.textContent = "Payment Approval Error"; 
            });
        },
        onReadyForServerCompletion: (paymentId, txid) => {
            // Send paymentId and txid to server for completion    
            fetch('/api/payments/complete', { // Example fetch call
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ paymentId, txid })
            })
            .then(response => {
               if (!response.ok) throw new Error('Completion Error');
                appStatus.textContent = "Payment Completed!"; 
            })
            .catch(error => {
                console.error(error);
                appStatus.textContent = "Payment Completion Error";
            });
        },
        onCancel: (paymentId) => { 
            appStatus.textContent = "Payment Cancelled"; 
        },
        onError: (error, payment) => {
            console.error('Payment Error:', error, payment); 
             appStatus.textContent = "Payment Error Occurred"; 
        }
    };

    Pi.createPayment(paymentData, paymentCallbacks)
        // .then(...) // No need for this if handling outcomes in callbacks
        .catch(error => {
            console.error('Create Payment Error:', error);
            appStatus.textContent = "Error Initiating Payment"; 
        });
});