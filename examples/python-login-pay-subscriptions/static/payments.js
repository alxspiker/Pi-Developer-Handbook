function onIncompletePaymentFound(payment) { 
    const data = {
        pay_id: payment['identifier']
    };
    fetch('/cancel_payment', {
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        method: 'POST',
        cache: "no-cache",
        cors: "cors",
        body: JSON.stringify(data),
    }).then(response => {
        console.log(response);
    });
};



function onReadyForServerApproval(paymentId) { 
    const data = {
        pay_id: paymentId
    };
    fetch('/confirm_payment', {
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        method: 'POST',
        cache: "no-cache",
        cors: "cors",
        body: JSON.stringify(data),
    }).then(response => {
        console.log(response);
    });
};

function onReadyForServerCompletion(paymentId, txid) { 
    const data = {
        user_id: user_id,
        pay_id: paymentId,
        tx_id: txid
    };
    fetch('/finalize_payment', {
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        method: 'POST',
        cache: "no-cache",
        cors: "cors",
        body: JSON.stringify(data),
    }).then(response => {
        window.location.reload();
    });
};

function onCancel(paymentId) { 
    const data = {
        pay_id: paymentId
    };
    fetch('/cancel_payment', {
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        method: 'POST',
        cache: "no-cache",
        cors: "cors",
        body: JSON.stringify(data),
    }).then(response => {
        console.log(response);
    });
};

function onError(error, payment=null) { 
    console.log(error, payment);
    const data = {
        pay_id: paymentId
    };
    fetch('/cancel_payment', {
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        method: 'POST',
        cache: "no-cache",
        cors: "cors",
        body: JSON.stringify(data),
    }).then(response => {
        console.log(response);
    });
};

// pi amount = (wanted_price_usd (1 / pi_price_in_usd))
PaymentData = {
    amount: (1 * (1 / 31.40)),
    memo: 'The Pi Ai 1 Month Pro',
    metadata: {order_date:"now"},
};

PaymentCallbacks = {
    onReadyForServerApproval: onReadyForServerApproval,
    onReadyForServerCompletion: onReadyForServerCompletion,
    onCancel: onCancel,
    onError: onError,
};

async function check_subscription(user_id){
    const data = {
        user_id: user_id
    };
    let response = await fetch('/check_subscription', {
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        method: 'POST',
        cache: "no-cache",
        cors: "cors",
        body: JSON.stringify(data),
    });
    var datareceived = await response.json();
    return datareceived['subscribed'];
}