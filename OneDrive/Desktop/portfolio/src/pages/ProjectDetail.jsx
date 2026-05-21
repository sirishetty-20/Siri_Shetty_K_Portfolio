import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import GlassCard from '../components/ui/GlassCard.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import TechBadge from '../components/shared/TechBadge.jsx'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import { cn } from '../lib/cn.js'

const TABS = ['Overview', 'Architecture', 'Dataset', 'ML Workflow', 'Results', 'Future Scope']

export default function ProjectDetail() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)
  const [tab, setTab] = useState('Overview')

  if (!p) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-bold text-white">Project not found</h2>
        <Link to="/projects" className="text-gold mt-4 inline-block">← Back to projects</Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <Link to="/projects" className="text-sm text-white/60 hover:text-gold">← All projects</Link>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-gold/80">{p.category}</div>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-white">{p.title}</h1>
        <p className="mt-4 text-white/75 max-w-3xl">{p.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <TechBadge key={t} color="violet">{t}</TechBadge>)}</div>
        <div className="mt-6 flex flex-wrap gap-2">
          <GlowButton as="a" href={p.github} target="_blank" rel="noreferrer" variant="outline">GitHub</GlowButton>
          {p.demo && <GlowButton as="a" href={p.demo} target="_blank" rel="noreferrer" variant="outline">Live Demo</GlowButton>}
          {p.publicationUrl && <GlowButton as="a" href={p.publicationUrl} target="_blank" rel="noreferrer" variant="violet">Show Publication</GlowButton>}
          <GlowButton variant="outline">Download Report</GlowButton>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 border-b border-white/10 pb-2">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn('px-4 py-2 text-sm rounded-t-lg transition-colors',
              tab === t ? 'text-gold bg-white/5' : 'text-white/60 hover:text-white')}
          >{t}</button>
        ))}
      </div>

      <div>
        {tab === 'Overview' && (
          <div className="grid md:grid-cols-2 gap-5">
            <GlassCard glow="gold"><h3 className="font-semibold text-white mb-2">Problem</h3><p className="text-white/75 text-sm">{p.problem}</p></GlassCard>
            <GlassCard glow="violet"><h3 className="font-semibold text-white mb-2">Solution</h3><p className="text-white/75 text-sm">{p.description}</p></GlassCard>
            <GlassCard glow="cyan" className="md:col-span-2">
              <h3 className="font-semibold text-white mb-3">Key Features</h3>
              <div className="flex flex-wrap gap-2">{p.features?.map((f) => <TechBadge key={f} color="cyan">{f}</TechBadge>)}</div>
            </GlassCard>
          </div>
        )}
        {tab === 'Architecture' && (
          <div className="space-y-4">
            <GlassCard glow="violet"><p className="text-white/80 text-sm">{p.architecture}</p></GlassCard>
            <GlassCard glow="gold" className="h-64 flex items-center justify-center text-white/40 text-sm">[ Architecture diagram placeholder ]</GlassCard>
          </div>
        )}
        {tab === 'Dataset' && <GlassCard glow="cyan"><p className="text-white/80 text-sm">{p.dataset}</p></GlassCard>}
        {tab === 'ML Workflow' && <GlassCard glow="violet"><p className="text-white/80 text-sm">{p.workflow}</p></GlassCard>}
        {tab === 'Results' && (
          <div className="space-y-5">
            {Object.keys(p.metrics || {}).length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.entries(p.metrics).map(([k, v]) => (
                  <GlassCard key={k} glow="gold" className="text-center">
                    <div className="text-3xl font-extrabold gradient-text">{v}</div>
                    <div className="text-xs uppercase tracking-wide text-white/60 mt-1">{k}</div>
                  </GlassCard>
                ))}
              </div>
            )}
            <GlassCard glow="violet"><p className="text-white/80 text-sm">{p.results}</p></GlassCard>
            <SectionHeader eyebrow="Visuals" title="Screenshots" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1,2,3].map((i) => (
                <GlassCard key={i} className="h-44 flex items-center justify-center text-white/30 text-sm">Screenshot {i}</GlassCard>
              ))}
            </div>
          </div>
        )}
        {tab === 'Future Scope' && <GlassCard glow="cyan"><p className="text-white/80 text-sm">{p.future}</p></GlassCard>}
      </div>
    </div>
  )
}
