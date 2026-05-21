import SectionHeader from '../components/shared/SectionHeader.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import TechBadge from '../components/shared/TechBadge.jsx'
import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <div className="space-y-10">
      <SectionHeader eyebrow="Toolbelt" title="Skills & Capabilities" subtitle="Organized by category — from raw data to deployed AI." />
      <div className="grid md:grid-cols-2 gap-5">
        {skills.map((s) => (
          <GlassCard key={s.category} glow={s.accent}>
            <div className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-3">{s.category}</div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => <TechBadge key={i} color={s.accent}>{i}</TechBadge>)}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
