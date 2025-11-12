import { useState } from 'react'
import { Send, User, Users, MessageSquare } from 'lucide-react'

export default function Demo() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Agents joined: Researcher, Coder, Strategist. Ask a question to start the discussion.' }
  ])
  const [input, setInput] = useState('How can we build a simple notes app with offline sync?')

  const send = async () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', content: input }
    setMessages((m) => [...m, userMsg])

    // Fake agent conversation for landing page demo
    await new Promise((r) => setTimeout(r, 400))
    const convo = [
      { role: 'researcher', content: 'We could use IndexedDB for offline storage and sync to a backend when online.' },
      { role: 'coder', content: 'On web, use localForage for IndexedDB. Backend could expose a /sync endpoint and resolve conflicts by timestamp.' },
      { role: 'strategist', content: 'Start with local-only MVP, then add background sync and optimistic UI. Ship in 2 sprints.' },
    ]
    for (const m of convo) {
      await new Promise((r) => setTimeout(r, 450))
      setMessages((prev) => [...prev, m])
    }

    await new Promise((r) => setTimeout(r, 500))
    setMessages((prev) => [...prev, { role: 'consensus', content: 'Use localForage + background sync. Provide conflict resolution and clear status. Start with CRUD then layer sync.' }])
    setInput('')
  }

  const roleStyle = (role) => {
    switch (role) {
      case 'researcher': return 'bg-emerald-50 text-emerald-800 border-emerald-200'
      case 'coder': return 'bg-blue-50 text-blue-800 border-blue-200'
      case 'strategist': return 'bg-amber-50 text-amber-800 border-amber-200'
      case 'consensus': return 'bg-violet-50 text-violet-800 border-violet-200'
      case 'system': return 'bg-gray-50 text-gray-700 border-gray-200'
      default: return 'bg-white text-gray-800 border-gray-200'
    }
  }

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-6">
          <h2 className="text-3xl font-bold text-gray-900">See how the team collaborates</h2>
          <p className="mt-2 text-gray-600">This interactive preview simulates how agents discuss and converge on a final answer.</p>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-900 text-white px-4 py-3 flex items-center gap-2">
            <Users size={18} /> Researcher · Coder · Strategist
          </div>

          <div className="p-4 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`rounded-xl border px-3 py-2 text-sm ${roleStyle(m.role)}`}>
                <div className="font-medium capitalize">{m.role}</div>
                <div className="opacity-90">{m.content}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 bg-white p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your team anything..."
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
            <button onClick={send} className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800">
              <Send size={16} /> Send
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
