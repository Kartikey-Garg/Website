export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Paste Clause</h3>
            <p className="text-gray-600">Input any confusing or lengthy contract clause.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">2. Let AI Analyze</h3>
            <p className="text-gray-600">Our AI (Gemini Pro via Langflow) understands and interprets it.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">3. Read Explanation</h3>
            <p className="text-gray-600">Get a plain-English summary of what the clause means.</p>
          </div>
        </div>
      </div>
    </section>
  )
}