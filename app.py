from flask import Flask, request, jsonify
import google.generativeai as genai
import os

app = Flask(__name__)

# Configure the Gemini API key from environment variables
genai.configure(api_key=os.environ.get('GEMINI_API_KEY'))

# Initialize the generative model
generation_config = {
  "temperature": 0.9,
  "top_p": 1,
  "top_k": 1,
  "max_output_tokens": 2048,
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]
model = genai.GenerativeModel(model_name='gemini-pro',generation_config=generation_config, safety_settings=safety_settings)

@app.route("/", methods=["GET"])
def index():
    return "Backend is working!"

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    query = data.get('query')
    avatar = data.get('avatar')

    if not query or not avatar:
        return jsonify({'error': 'Query and avatar are required'}), 400

    # Customize the prompt based on the avatar
    prompt_prefix = ""
    if avatar == "friend":
        prompt_prefix = "Respond like a friendly and supportive friend: "
    elif avatar == "educator":
        prompt_prefix = "Respond like a knowledgeable and helpful educator: "
    else:
        prompt_prefix = "Respond as a helpful AI assistant: "

    full_prompt = prompt_prefix + query
    try:
        response = model.generate_content(full_prompt)
        return jsonify({'response': response.text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)