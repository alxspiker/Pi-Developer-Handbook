const express = require('express');
const { ServerApi } = require('minepi-sdk'); // Assuming you have the SDK 
const app = express();

// ... (Your middleware setup)

const api = new ServerApi({ apiKey: "your_server_api_key" }); 

 // Verify Access Token (sent from frontend after auth)
 app.post('/api/verify', (req, res) => {
    const accessToken = req.body.accessToken; // Get from request body

    api.request('/me', accessToken)
        .then(meResponse => {
            // Success! Store the verified user data as needed
            res.status(200).json({ message: "User Verified" });
        })
        .catch(error => {
            console.error('Verification Error:', error);
            res.status(401).json({ message: "Invalid Token" });
        });
});

app.post('/api/payments/approve', (req, res) => {
    const { paymentId } = req.body;

    // Use the SDK's /payments/{payment_id}/approve endpoint (documented in payments_approve.md)
    api.request(`/payments/${paymentId}/approve`, accessToken) 
        .then(() => {
            res.status(200).json({ message: "Payment Approved" });
        })
        .catch(error => {
            console.error('Payment Approval Error:', error);
            res.status(500).json({ message: "Approval Failed" });
        });
});

app.post('/api/payments/complete', (req, res) => {
    const { paymentId, txid } = req.body;

    // Use the SDK's /payments/{payment_id}/complete endpoint (documented in payments_complete.md)
    api.request(`/payments/${paymentId}/complete`, accessToken, { txid }) 
        .then(() => {
            res.status(200).json({ message: "Payment Completed" });
        })
        .catch(error => {
            console.error('Payment Completion Error:', error);
            res.status(500).json({ message: "Completion Failed" });
        });
});