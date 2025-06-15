import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // optional

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const handleExplain = async () => {
  if (!input.trim()) return
  setLoading(true)
  setOutput('')

  const payload = {
    input_value: input,
    output_type: 'chat',
    input_type: 'chat',
    session_id: 'user_1'
  }

  try {
    const res = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    // Extract explanation from nested response
    const explanation =
      data.outputs?.[0]?.outputs?.[0]?.results?.message?.text ||
      'No explanation returned.'
    setOutput(explanation)
  } catch (err) {
    console.error(err)
    setOutput('An error occurred while fetching the explanation.')
  } finally {
    setLoading(false)
  }
}