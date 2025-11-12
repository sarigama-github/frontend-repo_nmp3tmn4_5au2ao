import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import TeamBuilder from './components/TeamBuilder'
import Demo from './components/Demo'

function App() {
  const [selectedTeam, setSelectedTeam] = useState(null)

  const handleStart = (team) => {
    setSelectedTeam(team)
    // In a full app, we would navigate to a chat page and pass this team
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <TeamBuilder onStart={handleStart} />
      <Demo />

      <footer className="py-12 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-4">
          Built for teams that want deeper answers. Create your panel of experts and let them collaborate.
        </div>
      </footer>
    </div>
  )
}

export default App
