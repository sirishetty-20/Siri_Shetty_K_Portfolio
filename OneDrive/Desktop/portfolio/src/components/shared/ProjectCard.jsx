import { Link } from 'react-router-dom'
import GlassCard from '../ui/GlassCard.jsx'
import TechBadge from './TechBadge.jsx'
import GlowButton from '../ui/GlowButton.jsx'

export default function ProjectCard({ p }) {
  return (
    <GlassCard glow="violet" className="flex flex-col h-full">
      <div className="text-xs text-gold/80 uppercase tracking-wider">{p.category}</div>
      <h3 className="mt-2 text-xl font-bold text-white">{p.title}</h3>
      <p className="mt-2 text-sm text-white/70 line-clamp-3">{p.short}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tech.slice(0, 6).map((t) => <TechBadge key={t} color="violet">{t}</TechBadge>)}
      </div>
      {Object.keys(p.metrics || {}).length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {Object.entries(p.metrics).slice(0, 3).map(([k, v]) => (
            <div key={k} className="rounded-lg bg-white/5 border border-white/10 p-2 text-center">
              <div className="text-sm font-bold text-gold">{v}</div>
              <div className="text-[10px] uppercase tracking-wide text-white/50">{k}</div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-5 flex flex-wrap gap-2 pt-2 border-t border-white/5">
        <GlowButton as="a" href={p.github} target="_blank" rel="noreferrer" variant="outline">GitHub</GlowButton>
        {p.demo && <GlowButton as="a" href={p.demo} target="_blank" rel="noreferrer" variant="outline">Live Demo</GlowButton>}
        {p.publicationUrl && (
          <GlowButton as="a" href={p.publicationUrl} target="_blank" rel="noreferrer" variant="violet">Show Publication</GlowButton>
        )}
        <GlowButton as={Link} to={`/projects/${p.slug}`}>View Full Project →</GlowButton>
      </div>
    </GlassCard>
  )
}
