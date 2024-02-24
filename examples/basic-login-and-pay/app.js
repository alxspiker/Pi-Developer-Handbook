Pi.init({ version: "2.0" }); // Initialize the SDK 

const appStatus = document.getElementById('app-status'); 
const payButton = document.getElementById('payButton'); 

// Auto-login on page load
Pi.authenticate(['username', 'payments']) // Request necessary scopes
    .then(authResult => {
        appStatus.textContent = `Logged in as: ${authResult.user.username}`;
        payButton.disabled = false; // Enable the button 
        // Send accessToken to backend for verification 
    })
    .catch(error => {
        appStatus.textContent = "Login Error"; 
        console.error(error);
    });

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