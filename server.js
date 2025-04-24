const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, service, message } = req.body;

        // Validate input
        if (!name || !email || !service || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Log the message
        console.log('New Contact Form Submission:', {
            name,
            email,
            service,
            message
        });

        res.status(200).json({ 
            message: 'Message received successfully!',
            debug: true
        });
    } catch (error) {
        console.error('Error handling contact form:', error);
        res.status(500).json({ error: 'Failed to process message' });
    }
});

// Serve static files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
        console.log('Open the above URL in your browser to view the website');
    });
}

module.exports = app; 