import { ArrowRight, Users2, MessageSquare, Workflow } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-sm font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
            New: Build AI teams that collaborate in real-time
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Your personal panel of expert AI agents, working together for you
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Create a custom team of specialized agents that discuss, debate, and converge on the best answer. Researcher, Coder, Strategist and more — all in one chat.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#builder" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 font-medium hover:bg-gray-800">
              Build your team
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-900 px-5 py-3 font-medium hover:bg-gray-50">
              Try a demo
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><Users2 size={18} className="text-violet-600" /> Up to 8 agents</div>
            <div className="flex items-center gap-2"><MessageSquare size={18} className="text-violet-600" /> Cross-talk reasoning</div>
            <div className="flex items-center gap-2"><Workflow size={18} className="text-violet-600" /> Consensus output</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-16 bg-gradient-to-tr from-violet-200 to-blue-200 opacity-60 blur-3xl rounded-full" />
          <div className="relative bg-white/70 backdrop-blur rounded-2xl border border-gray-100 shadow-xl p-6">
            <div className="grid grid-cols-3 gap-4">
              {["Researcher","Coder","Strategist","Critic","Planner","Summarizer"].map((role, i) => (
                <div key={role} className="rounded-xl border border-gray-200 p-3 bg-white">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-white grid place-items-center font-semibold">
                    {role[0]}
                  </div>
                  <div className="mt-3 text-sm font-medium text-gray-900">{role}</div>
                  <div className="text-xs text-gray-500">Ready</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-gray-900 text-white p-4">
              <div className="text-xs uppercase tracking-wide text-gray-400">Team Chat</div>
              <div className="mt-2 space-y-2 text-sm">
                <div><span className="text-violet-300">Researcher:</span> Collected 12 high-quality sources</div>
                <div><span className="text-blue-300">Coder:</span> Proposed an implementation outline</div>
                <div><span className="text-emerald-300">Strategist:</span> Flagged 2 potential risks</div>
                <div><span className="text-amber-300">Critic:</span> Suggested improvements to step 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
