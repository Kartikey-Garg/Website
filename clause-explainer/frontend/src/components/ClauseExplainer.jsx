import { useState } from 'react'

export default function ClauseExplainer() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

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
      setOutput(typeof data === 'string' ? data : data?.result || 'No explanation returned.')
    } catch (err) {
      console.error(err)
      setOutput('An error occurred while fetching the explanation.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="explain" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Paste Your Contract Clause</h2>
        <textarea
          rows={8}
          className="w-full p-4 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter legal clause here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <div className="text-center mt-6">
          <button
            onClick={handleExplain}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            {loading ? 'Explaining...' : 'Explain Now'}
          </button>
        </div>

        {output && (
          <div className="mt-10 p-6 bg-gray-100 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Explanation:</h3>
            <p className="whitespace-pre-wrap text-gray-800">{output}</p>
          </div>
        )}
      </div>
    </section>
  )
}