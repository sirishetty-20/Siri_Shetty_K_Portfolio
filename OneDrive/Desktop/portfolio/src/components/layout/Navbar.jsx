import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV } from '../../data/nav.js'
import { cn } from '../../lib/cn.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-navy/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold via-violet to-cyanx" />
          <span className="font-bold tracking-tight text-white">Siri Shetty K</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                cn('px-3 py-2 rounded-lg text-sm transition-colors',
                  isActive ? 'text-gold bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5')
              }
            >{n.label}</NavLink>
          ))}
        </nav>
        <button
          className="lg:hidden text-white/80 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy/90 backdrop-blur-xl">
          <div className="px-5 py-3 flex flex-col">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn('px-3 py-2.5 rounded-lg text-sm',
                    isActive ? 'text-gold bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5')
                }
              >{n.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
