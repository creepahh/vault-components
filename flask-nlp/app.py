from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Explicitly specify the model to avoid the default
summarizer = pipeline('summarization', model='facebook/bart-large-cnn')  

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    text = data.get('text', '')

    if not text:
        return jsonify({'error': 'Text is required for summarization'}), 400

    # Generate summary using the model
    summary = summarizer(text, max_length=130, min_length=30, do_sample=False)
    return jsonify({'summary': summary[0]['summary_text']})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
    