const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit_review', (req, res) => {
    const { rating, floorNumber, tableNumber, reviewText } = req.body;
    console.log('Review Received:', { rating, floorNumber, tableNumber, reviewText });

    // TODO: Send message to Facebook Messenger
	
	
	const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

// Replace these with actual values
const PAGE_ACCESS_TOKEN = 'EABf7BCLohR0BOxV7CBoI9ZBQZB5jl8E5AP5GM92dGjqTMRGvu5qREa7dz62ZCWhTlN5oUviSoZBtbxEhRAobM7RNBRaFTCZAnILnL8uF3hv6SScCJEZAjSjltKPPDbHYG52ARClf9xthZCdE3LrsOLELT8JGX5Gtf2cnHWew8BjJgG3vcIvzierA4ZCZATIYJ76O0N9ZBcv1znVXKg1Msc2OaSyZChK3SYZD';
const RECIPIENT_ID = '311244039433719';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));  // Serves static files (HTML, CSS, JS) from a folder named 'public'

// Handle form submission
app.post('/submit_review', (req, res) => {
    const { rating, floorNumber, tableNumber, reviewText } = req.body;

    const messageContent = `
        New Review:
        Rating: ${rating} stars
        Floor: ${floorNumber}
        Table: ${tableNumber}
        Comments: ${reviewText}
    `;

    // Send a message via Facebook Messenger API
    axios.post(`https://graph.facebook.com/v13.0/me/messages?access_token=${EABf7BCLohR0BOxV7CBoI9ZBQZB5jl8E5AP5GM92dGjqTMRGvu5qREa7dz62ZCWhTlN5oUviSoZBtbxEhRAobM7RNBRaFTCZAnILnL8uF3hv6SScCJEZAjSjltKPPDbHYG52ARClf9xthZCdE3LrsOLELT8JGX5Gtf2cnHWew8BjJgG3vcIvzierA4ZCZATIYJ76O0N9ZBcv1znVXKg1Msc2OaSyZChK3SYZD}`, {
        recipient: { id: 311244039433719 },
        message: { text: messageContent }
    })
    .then(response => {
        console.log('Message Sent: ', response.data);
        res.send('Review submitted!');
    })
    .catch(err => {
        console.error('Error: ', err);
        res.status(500).send('An error occurred.');
    });
});

// Optionally serve your HTML file if not using static file serving
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

	
	
	
    res.send('Review received!');
});