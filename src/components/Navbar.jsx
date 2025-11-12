import { Menu, MessageSquare, Users, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 grid place-items-center text-white">
            <Sparkles size={18} />
          </div>
          <span className="text-lg font-semibold text-gray-900">TeamChat AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#builder" className="hover:text-gray-900">Team Builder</a>
          <a href="#demo" className="hover:text-gray-900">Live Demo</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
