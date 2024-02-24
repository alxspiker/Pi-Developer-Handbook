Pi.init({ version: "2.0", sandbox: false })
//Pi.init({ version: "2.0", sandbox: true })
const scopes = ['payments','username', 'wallet_address'];
var username = '';
var user_id = '';

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

login();