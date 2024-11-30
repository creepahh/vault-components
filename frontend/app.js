document.getElementById('summarizeButton').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const summaryResult = document.getElementById('summaryResult');
  
    if (!inputText) {
      summaryResult.textContent = 'Please enter some text to summarize.';
      return;
    }
  
    summaryResult.textContent = 'Processing...';
  
    try {
      // Make a POST request to the backend
      const response = await fetch('http://localhost:3000/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });
  
      if (!response.ok) throw new Error('Error with summarization request.');
  
      const data = await response.json();
      summaryResult.textContent = data.summary || 'No summary generated.';
    } catch (error) {
      summaryResult.textContent = 'Failed to fetch summary. Please try again.';
      console.error(error);
    }
  });
  