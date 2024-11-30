exports.summarizeText = async (req, res) => {
    const { text } = req.body;

    const sampleText = "Artificial intelligence, or AI, refers to the simulation of human intelligence in machines that are programmed to think and learn. These machines can perform tasks that typically require human intelligence, such as decision-making, speech recognition, and visual perception. AI is being used in various industries, from healthcare to finance, to improve efficiency and decision-making.";

    try {
        // Use sample text if no input is given
        const inputText = text || sampleText;

        // POST request to the Flask NLP engine
        const response = await axios.post('http://127.0.0.1:5000/summarize', { text: inputText });

        // Return the summarized text
        res.status(200).json({ summary: response.data.summary });
    } catch (error) {
        console.error('Error connecting to NLP engine:', error.message);
        res.status(500).json({ error: 'Failed to summarize text.' });
    }
};
