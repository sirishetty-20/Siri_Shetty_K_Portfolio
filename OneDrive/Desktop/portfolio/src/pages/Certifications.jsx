import { useState } from 'react'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import FileUploader from '../components/shared/FileUploader.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import { certifications as initial } from '../data/certifications.js'

export default function Certifications() {
  const [items, setItems] = useState(initial)
  const addNew = () => setItems([{ name: 'New Certificate', issuer: 'Issuer', year: new Date().getFullYear().toString() }, ...items])
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <SectionHeader eyebrow="Credentials" title="Certifications" />
        <GlowButton onClick={addNew}>+ Add New Certificate</GlowButton>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((c, i) => (
          <GlassCard key={i} glow="gold">
            <h3 className="text-white font-bold">{c.name}</h3>
            <div className="text-xs text-white/60 mt-1">{c.issuer} · {c.year}</div>
            <div className="mt-4"><FileUploader label="Certificate" /></div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
