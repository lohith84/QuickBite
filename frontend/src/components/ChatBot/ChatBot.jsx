import React, { useState } from 'react';

function ChatBot() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  
  const backend = process.env.Backend_URL; // Accessing the API base URL from environment

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${backend}/query`, { // Using apiUrl with the specific endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: input })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setOutput(data.generated_text);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state or show error message to user
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <p>Output:</p>
        <p>{output}</p>
      </div>
    </div>
  );
}

export default ChatBot;
