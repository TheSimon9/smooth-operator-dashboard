
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Handle form submission
        const formData = req.body;
        // Process the formData as needed (e.g., save to database, send to external API, etc.)
        console.log('Form data:', formData);
        // Send back a response
        res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
        // Method Not Allowed
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
