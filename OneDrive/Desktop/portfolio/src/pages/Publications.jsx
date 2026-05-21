import SectionHeader from '../components/shared/SectionHeader.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import { publications } from '../data/publications.js'

export default function Publications() {
  return (
    <div className="space-y-10">
      <SectionHeader eyebrow="Research" title="IEEE Publications" />
      <div className="space-y-6">
        {publications.map((p, i) => (
          <GlassCard key={i} glow="gold" className="border-gold/30">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <span className="inline-block text-[10px] font-bold tracking-widest px-2 py-1 rounded bg-gold text-navy">IEEE</span>
                <h3 className="mt-3 text-2xl font-bold text-white">{p.title}</h3>
                <div className="mt-1 text-sm text-gold">{p.conference} · {p.year}</div>
                <p className="mt-4 text-white/75 leading-relaxed">{p.summary}</p>
                <div className="mt-5">
                  <GlowButton as="a" href={p.url} target="_blank" rel="noreferrer">View on IEEE →</GlowButton>
                </div>
              </div>
              <div className="w-full md:w-40 h-32 rounded-xl bg-gradient-to-br from-gold/30 via-violet/30 to-cyanx/30 flex items-center justify-center font-extrabold text-2xl text-white">
                IEEE
              </div>
            </div>
          </GlassCard>
        ))}
        <GlassCard className="text-center text-white/40 text-sm">More publications coming soon.</GlassCard>
      </div>
    </div>
  )
}
