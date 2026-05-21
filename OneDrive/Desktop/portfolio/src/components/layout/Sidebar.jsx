import { NavLink } from 'react-router-dom'
import { NAV } from '../../data/nav.js'
import { cn } from '../../lib/cn.js'

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-60 shrink-0 border-r border-white/10 bg-navy/40 backdrop-blur-xl sticky top-16 self-start h-[calc(100vh-4rem)] px-4 py-8">
      <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 px-2">Navigate</div>
      <nav className="flex flex-col gap-1">
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.to === '/'}
            className={({ isActive }) =>
              cn('px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2',
                isActive ? 'text-gold bg-white/5 border border-white/10' : 'text-white/70 hover:text-white hover:bg-white/5')
            }
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
            {n.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60">
        <div className="text-white font-semibold mb-1">Open to roles</div>
        Data Science · ML · AI Engineering
      </div>
    </aside>
  )
}
