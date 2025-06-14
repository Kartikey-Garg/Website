export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-gray-100 text-center text-sm text-gray-600">
      <p>🚨 This tool provides AI-generated summaries and does not constitute legal advice.</p>
      <p className="mt-2">© {new Date().getFullYear()} Clause Explainer. All rights reserved.</p>
    </footer>
  )
}