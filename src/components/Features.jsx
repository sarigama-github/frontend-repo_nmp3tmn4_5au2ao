import { Users, Brain, GitMerge, ShieldCheck } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Users,
      title: 'Build your dream team',
      desc: 'Mix and match experts like Researcher, Coder, Strategist, Critic, and more — each with unique skills.'
    },
    {
      icon: Brain,
      title: 'Agents that debate',
      desc: 'Team members talk to each other, compare ideas, and converge on the best solution for your prompt.'
    },
    {
      icon: GitMerge,
      title: 'Consensus output',
      desc: 'Get a single, well-argued answer that combines the strengths of every agent on your team.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent reasoning',
      desc: 'See who said what. Review the discussion and rationale behind the final answer.'
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Why a team beats a single chatbot</h2>
          <p className="mt-3 text-gray-600">Complex questions benefit from multiple perspectives. Our agents collaborate to deliver reliable, nuanced results.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-violet-100 text-violet-700 grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
