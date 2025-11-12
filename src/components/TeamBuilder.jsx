import { useState } from 'react'
import { Plus, X, Users, Sparkles } from 'lucide-react'

const ROLES = [
  { id: 'researcher', name: 'Researcher', desc: 'Finds sources, gathers facts' },
  { id: 'coder', name: 'Coder', desc: 'Designs code & implementation' },
  { id: 'strategist', name: 'Strategist', desc: 'Plans steps & mitigates risks' },
  { id: 'critic', name: 'Critic', desc: 'Finds flaws & improves quality' },
  { id: 'writer', name: 'Writer', desc: 'Explains clearly & concisely' },
  { id: 'summarizer', name: 'Summarizer', desc: 'Distills to essentials' }
]

export default function TeamBuilder({ onStart }) {
  const [team, setTeam] = useState([ROLES[0], ROLES[1], ROLES[2]])

  const toggleRole = (role) => {
    setTeam((prev) => {
      const exists = prev.find((r) => r.id === role.id)
      if (exists) return prev.filter((r) => r.id !== role.id)
      if (prev.length >= 8) return prev
      return [...prev, role]
    })
  }

  return (
    <section id="builder" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Assemble your AI team</h2>
          <p className="mt-3 text-gray-600">Pick the specialists you want. You can start with 3 and tweak anytime.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ROLES.map((role) => {
                const active = team.some((r) => r.id === role.id)
                return (
                  <button
                    key={role.id}
                    onClick={() => toggleRole(role)}
                    className={`text-left rounded-xl border p-4 transition bg-white ${active ? 'border-violet-500 ring-2 ring-violet-100' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className={`h-10 w-10 rounded-lg grid place-items-center text-white ${active ? 'bg-gradient-to-br from-violet-500 to-blue-500' : 'bg-gray-900'}`}>
                      {role.name[0]}
                    </div>
                    <div className="mt-3 font-medium text-gray-900">{role.name}</div>
                    <div className="text-sm text-gray-600">{role.desc}</div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white sticky top-24">
              <div className="flex items-center gap-2 text-gray-900 font-semibold">
                <Users size={18} /> Your team ({team.length})
              </div>
              <div className="mt-4 space-y-3">
                {team.map((role) => (
                  <div key={role.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-md bg-gradient-to-br from-violet-500 to-blue-500 text-white grid place-items-center text-sm font-semibold">
                        {role.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{role.name}</div>
                        <div className="text-xs text-gray-500">{role.desc}</div>
                      </div>
                    </div>
                    <button onClick={() => toggleRole(role)} className="text-gray-400 hover:text-gray-600">
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onStart?.(team)}
                className="mt-6 w-full inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-4 py-2.5 font-medium hover:bg-gray-800"
              >
                <Sparkles size={16} className="mr-2" /> Start a team chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
