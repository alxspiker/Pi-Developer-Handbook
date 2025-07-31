Pi.init({ version: "2.0", sandbox: false })
//Pi.init({ version: "2.0", sandbox: true })
const scopes = ['payments','username', 'wallet_address'];
var username = '';
var user_id = '';
var isInPiBrowser = null;

// Pi Browser Detection Logic
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

async function initializeApp() {
    const isPiBrowser = await detectPiBrowser();
    
    if (!isPiBrowser) {
        $('.chat-log').append(`
            <div class="ai-message" style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; margin: 10px 0; border-radius: 5px;">
                <strong>⚠️ Pi Browser Required</strong><br>
                This chat app requires Pi Browser to access Pi Network features.<br>
                <a href="https://pinet.com/" target="_blank" style="color: #7B1FA2; text-decoration: underline;">
                    Open in Pi Browser
                </a>
            </div>
        `);
        return;
    }

    // Show login prompt for Pi Browser users
    $('.chat-log').append('<div class="ai-message">Welcome! Click the button below to login with Pi Network.</div>');
    
    // Create login button
    const loginButton = $('<button style="background: #7B1FA2; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 10px 0;">Login with Pi</button>');
    $('.chat-log').append(loginButton);
    
    loginButton.click(async function() {
        try {
            $(this).prop('disabled', true).text('Logging in...');
            await login();
            $(this).hide();
        } catch (error) {
            console.error('Login failed:', error);
            $(this).prop('disabled', false).text('Retry Login');
        }
    });
}

async function login(){
    auth_result = await Pi.authenticate(scopes, onIncompletePaymentFound)
    username = auth_result.user.username
    user_id = auth_result.user.uid
    let is_subscribed = await check_subscription(user_id);
    if (is_subscribed == false) {
        $('.chat-log').append('<div class="ai-message">You must subscribe, in a few seconds a payment screen will appear. If you cancelled it, just refresh the page to restart payment screen.</div>');
        setTimeout(function() {
            Pi.createPayment(paymentData=PaymentData, callbacks=PaymentCallbacks);
        }, 5000);
    }else{
        $('.chat-log').append('<div class="ai-message">Hello '+username+'! Please be aware you may need to resubscribe while in development. App updates are coming today!</div>');
    }
}

async function get_response() {
    var data = {
        message: chatform.querySelector('input[name=message]').value
    };
    let response = await fetch('/get_response', {
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        method: 'POST',
        cache: "no-cache",
        cors: "cors",
        body: JSON.stringify(data),
    })
    var datareceived = await response.json();
    $('.chat-log').append('<div class="ai-message">' + datareceived.message + '</div>');
}

const history = document.getElementById('chat-log');
const chatform = document.getElementById('chat-form');
chatform.addEventListener('submit', (event) => {
    event.preventDefault();
    $('.chat-log').append('<div class="user-message">'+ user_id +'<br>' + username + ': ' + chatform.querySelector('input[name=message]').value + '</div>');
    get_response();
});

// Initialize the app with browser detection
initializeApp();