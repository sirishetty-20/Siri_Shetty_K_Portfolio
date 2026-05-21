import { Outlet } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 min-w-0 px-5 md:px-10 py-10 md:py-14 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
