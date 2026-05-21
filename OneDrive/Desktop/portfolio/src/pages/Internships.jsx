import SectionHeader from '../components/shared/SectionHeader.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import TechBadge from '../components/shared/TechBadge.jsx'
import FileUploader from '../components/shared/FileUploader.jsx'
import { internships } from '../data/internships.js'

export default function Internships() {
  return (
    <div className="space-y-10">
      <SectionHeader eyebrow="Experience" title="Internships" subtitle="Hands-on industry experience across data science, AI, and analytics." />
      <div className="relative pl-6 md:pl-10 space-y-8 before:absolute before:left-2 md:before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-gold/60 before:via-violet/60 before:to-cyanx/60">
        {internships.map((i, idx) => (
          <div key={idx} className="relative">
            <span className="absolute -left-[26px] md:-left-[34px] top-6 w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_rgba(240,180,41,0.7)]" />
            <GlassCard glow="violet">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">{i.role}</h3>
                  <div className="text-gold text-sm">{i.company}</div>
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wider">{i.duration}</div>
              </div>
              <p className="mt-3 text-sm text-white/75">{i.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">{i.tech.map((t) => <TechBadge key={t} color="violet">{t}</TechBadge>)}</div>
              <div className="mt-5 grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/60 mb-2">Offer Letter</div>
                  <FileUploader label="Offer Letter" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/60 mb-2">Completion Certificate</div>
                  <FileUploader label="Completion Certificate" />
                </div>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  )
}
